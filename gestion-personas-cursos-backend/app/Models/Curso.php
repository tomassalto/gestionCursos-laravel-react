<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Curso extends Model
{
    use HasFactory;

    /*
    *Verifica que no exista un nombre y categoria duplicados
    */
    protected static function boot()
    {
        parent::boot();

        static::saving(function ($curso) {
            $existingCurso = Curso::where('nombre', $curso->nombre)
                ->where('id_categoria', $curso->categoria)
                ->first();

            if ($existingCurso && $existingCurso->id !== $curso->id) {
                throw new \Exception('A course with the same name already exists in this category.');
            }
        });
    }

    public function personas()
    {
        return $this->belongsToMany(Persona::class, "inscripciones"); // Relación many-to-many con el modelo Persona
    }
 

    protected $fillable = ['nombre', 'id_categoria', 'descripcion'];    
}
