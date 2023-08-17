<?php

namespace App\Http\Controllers\Api;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Persona; 
use App\Models\Curso; 

class CursoController extends Controller
{
    // public function cursosDePersona($personaId)
    // {
    //     $persona = Persona::findOrFail($personaId);

    //     $cursos = $persona->cursos; // Esto asume que tienes una relación "cursos" en el modelo Persona

    //     return response()->json($cursos);
    // }

    public function mostrarCursos()
    {
        try {
            $cursos = Curso::all();
            return response()->json($cursos);
        } catch (\Exception $e) {
            // Manejo de la excepción
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }
}
