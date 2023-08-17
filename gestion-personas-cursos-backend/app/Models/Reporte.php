<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Reporte extends Model
{
    use HasFactory;

    protected $fillable = [
        'curso_id',
        'genero',
        'menores',
        'mayores',
    ];

    // Definir la relación con el modelo Curso
    public function curso()
    {
        return $this->belongsTo(Curso::class);
    }
}
