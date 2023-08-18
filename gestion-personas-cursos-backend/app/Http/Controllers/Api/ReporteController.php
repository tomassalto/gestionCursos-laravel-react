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
    /*
    *Obtiene la inscripcion haciendo un join entre curso y persona, para sacar los datos de las personas y realizar cuentas
    */
    public function obtenerReporte($cursoId)    {
    

        $totalInscritos = Inscripcion::join('personas', 'personas.id', '=', 'inscripciones.id_persona' )->where('id_curso', $cursoId)->count();

        $nombreCurso = Inscripcion::join('cursos', 'cursos.id', '=', 'inscripciones.id_curso')
        ->where('id_curso', $cursoId)
        ->select('cursos.nombre')
        ->first();
      
        $totalMasculinos = Inscripcion::join('personas', 'personas.id', '=', 'inscripciones.id_persona')->where('id_curso', $cursoId)->where('personas.genero', 'masculino')->count();
        
        $totalFemeninos = Inscripcion::join('personas', 'personas.id', '=', 'inscripciones.id_persona')->where('id_curso', $cursoId)->where('personas.genero', 'femenino')->count();
        
        $totalMayores = Inscripcion::join('personas', 'personas.id', '=', 'inscripciones.id_persona')->where('id_curso', $cursoId)->where('personas.edad', '>=', 18)->count();

        $totalMenores = Inscripcion::join('personas', 'personas.id', '=', 'inscripciones.id_persona')->where('id_curso', $cursoId)->where('personas.edad', '<=', 17)->count();
        if($totalInscritos === 0){            
            return response()->json([
                'total_inscritos' => $totalInscritos,
                'curso_nombre' => $nombreCurso,
            ]);
        }else{
            $porcentajeMasculinos = ($totalMasculinos / $totalInscritos) * 100;
            $porcentajeFemeninos = ($totalFemeninos / $totalInscritos) * 100;
            $porcentajeMayores = ($totalMayores / $totalInscritos) * 100;
            $porcentajeMenores = ($totalMenores / $totalInscritos) * 100;

            return response()->json([
                'total_inscritos' => $totalInscritos,
                'total_masculinos' => $totalMasculinos,
                'total_femeninos' => $totalFemeninos,
                'porcentaje_masculinos' => round($porcentajeMasculinos, 2),
                'porcentaje_femeninos' => round($porcentajeFemeninos, 2),
                'porcentaje_mayores' => round($porcentajeMayores, 2),
                'porcentaje_menores' => round($porcentajeMenores, 2),
                'curso_nombre' => $nombreCurso
            ]);
        }    

        
    }
}
