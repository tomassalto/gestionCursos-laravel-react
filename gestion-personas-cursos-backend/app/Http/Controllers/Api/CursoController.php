<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Categoria;
use Illuminate\Http\Request;
use App\Models\Persona;
use App\Models\Curso;

class CursoController extends Controller
{
 /* Esta función muestra todos los cursos disponibles junto con su categoría correspondiente. Primero, se realiza una consulta a la base de datos para obtener los cursos, utilizando la función join para unir la tabla de cursos con la tabla de categorías. Luego, se seleccionan los campos necesarios, incluyendo el nombre de la categoría y se obtiene el resultado en formato JSON.*/
    public function mostrarCursos()
    {
        $cursos = Curso::join('categorias', 'cursos.id_categoria', '=', 'categorias.id')
            ->select('cursos.*', 'categorias.nombre as nombre_categoria')
            ->get();

        return response()->json($cursos);
    }    

    /*
    *Filtra los cursos segun la query, que puede ser por fecha, alfabetico o categoria
    */
    public function filtrarCursos(Request $request)
    {
        $query = Curso::select('cursos.*')
        ->join('categorias', 'cursos.id_categoria', '=', 'categorias.id');

        if ($request->categoria) {
            $query->where('categorias.nombre', $request->categoria);
        }

        if ($request->ordenFecha) {
            $query->orderBy('created_at',
                $request->ordenFecha
            );
        }

        if ($request->ordenAlfabetico) {
            $query->orderBy('nombre', $request->ordenAlfabetico);
        }

        return $query->get();
    }

    /*
    * Muestra los ultimos 5 cursos agregados en el carrousel
    */
    public function getLastAddedCourses()
    {
        $lastAddedCourses = Curso::orderBy('created_at', 'desc')
        ->limit(5) // Obtener los últimos 5 cursos
            ->get();

        return response()->json($lastAddedCourses);
    }

}
