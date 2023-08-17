<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Inscripcion extends Model
{
    use HasFactory;

    protected $fillable = [
        'id_persona',
        'id_curso',
    ];

    protected $rules = [
        'id_persona' => 'required',
        'id_curso' => 'required',
    ];

    protected $table = 'inscripciones';

    public function persona()
    {
        return $this->belongsTo(Persona::class);
    }

    public function curso()
    {
        return $this->belongsTo(Curso::class);
    }
}
