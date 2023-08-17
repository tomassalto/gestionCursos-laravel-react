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
    public function obtenerReporte($cursoId)
    {
        // $curso = Curso::findOrFail($cursoId);

        // // Obtener el reporte
        // $reporte = DB::table('inscripciones')
        // ->join('personas', 'inscripciones.id_persona', '=', 'personas.id')
        // ->where('inscripciones.id_curso', $curso->id)
        //     ->selectRaw('genero, SUM(CASE WHEN edad < 18 THEN 1 ELSE 0 END) as menores, SUM(CASE WHEN edad >= 18 THEN 1 ELSE 0 END) as mayores')
        //     ->groupBy('genero')
        //     ->get();

        // return response()->json($reporte);

        $inscripciones = Inscripcion::where('id_curso', $cursoId)->get();

        $totalInscritos = count($inscripciones);
        $totalMasculinos = $inscripciones->where('persona.genero', 'masculino')->count();
        $totalFemeninos = $inscripciones->where('persona.genero', 'femenino')->count();

        $porcentajeMasculinos = ($totalMasculinos / $totalInscritos) * 100;
        $porcentajeFemeninos = ($totalFemeninos / $totalInscritos) * 100;

        return response()->json([
            'total_inscritos' => $totalInscritos,
            'total_masculinos' => $totalMasculinos,
            'total_femeninos' => $totalFemeninos,
            'porcentaje_masculinos' => round($porcentajeMasculinos, 2),
            'porcentaje_femeninos' => round($porcentajeFemeninos, 2),
        ]);
    }
}
