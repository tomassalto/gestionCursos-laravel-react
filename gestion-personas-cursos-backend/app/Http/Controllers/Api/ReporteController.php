<?php

namespace App\Http\Controllers\Api;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Curso;
use App\Models\Inscripcion;
use App\Models\Persona;
use Illuminate\Support\Facades\DB;

class ReporteController extends Controller
{
    public function obtenerReporte($cursoId)    {
    

        $totalInscriptos = Inscripcion::join('personas', 'personas.id', '=', 'inscripciones.id_persona' )->where('id_curso', $cursoId)->count();
        
        $totalMasculinos = Inscripcion::join('personas', 'personas.id', '=', 'inscripciones.id_persona')->where('id_curso', $cursoId)->where('personas.genero', 'masculino')->count();
        
        $totalFemeninos = Inscripcion::join('personas', 'personas.id', '=', 'inscripciones.id_persona')->where('id_curso', $cursoId)->where('personas.genero', 'femenino')->count();
        
        $totalMayores = Inscripcion::join('personas', 'personas.id', '=', 'inscripciones.id_persona')->where('id_curso', $cursoId)->where('personas.edad', '>=', 18)->count();

        $totalMenores = Inscripcion::join('personas', 'personas.id', '=', 'inscripciones.id_persona')->where('id_curso', $cursoId)->where('personas.edad', '<=', 17)->count();

        $porcentajeMasculinos = ($totalMasculinos / $totalInscriptos) * 100;
        $porcentajeFemeninos = ($totalFemeninos / $totalInscriptos) * 100;
        $porcentajeMayores = ($totalMayores / $totalInscriptos) * 100;
        $porcentajeMenores = ($totalMenores / $totalInscriptos) * 100;

        return response()->json([
            'total_inscritos' => $totalInscriptos,
            'total_masculinos' => $totalMasculinos,
            'total_femeninos' => $totalFemeninos,
            'porcentaje_masculinos' => round($porcentajeMasculinos, 2),
            'porcentaje_femeninos' => round($porcentajeFemeninos, 2),
            'porcentaje_mayores' => round($porcentajeMayores, 2),
            'porcentaje_menores' => round($porcentajeMenores, 2),
        ]);
    }
}
