<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Persona extends Model
{
    
    protected $fillable = [
        'dni',        
        'nombre',
        'apellido',
        'edad',
        'genero',        
    ];

    protected $rules = [
        'dni' => 'numeric|required|digits_between:8,9|unique:personas',
        'nombre' => 'required',
        'apellido' => 'required',
        'genero' => 'required',
        'edad' => 'numeric|required|min:13|max:100',        
    ];

    public function cursos()
    {
        return $this->belongsToMany(Curso::class, "inscripciones"); // Relación many-to-many con el modelo Curso
    }
     
}
