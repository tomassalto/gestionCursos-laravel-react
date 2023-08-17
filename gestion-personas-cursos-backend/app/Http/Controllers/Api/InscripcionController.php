<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Inscripcion;
use App\Models\Persona;
use App\Models\Curso;

class InscripcionController extends Controller
{
    public function store(Request $request)
    {
        $data = $request;

        // Buscar una persona por su DNI
        $persona = Persona::where('dni', $data['dni'])->first();
        
        if ($persona) {
            $idPersona = $persona->id; // Devuelve el ID de la persona encontrada
        }
        
        // Verificar si la persona ya está inscrita en el curso
        $inscripcionExistente = Inscripcion::where([
            'id_persona' => $idPersona,
            'id_curso' => $data['curso_id'],
        ])->first();
        
        if ($inscripcionExistente) {
            return response()->json(['message' => 'La persona ya está inscrita en el curso'], 409);
        }

        $cantidadCursosInscritos = Inscripcion::where('id_persona', $idPersona)->count();
        if ($cantidadCursosInscritos >= 3) {
            return response()->json(['message' => 'La persona ya está inscrita en 3 cursos'], 422);
        }

        // Si la persona existe pero no está inscrita, crear la inscripción
        $inscripcion = new Inscripcion;
        $inscripcion->id_persona = $idPersona;
        $inscripcion->id_curso = $data['curso_id'];

        $inscripcion->save();

        return response()->json(['message' => 'Inscripción realizada con éxito'], 201);
    }
}
