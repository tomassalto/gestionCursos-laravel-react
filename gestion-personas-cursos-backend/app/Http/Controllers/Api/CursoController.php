<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Categoria;
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
        $cursos = Curso::join('categorias', 'cursos.id_categoria', '=', 'categorias.id')
            ->select('cursos.*', 'categorias.nombre as nombre_categoria')
            ->get();

        return response()->json($cursos);
    }

    public function getCoursesByCategory($category)
    {
        // $courses = Categoria::join('cursos', 'cursos.id_categoria', '=', 'categorias.id')->where('nombre', $category)->get();
        $courses = Curso::select('cursos.*')
            ->join('categorias', 'cursos.id_categoria', '=', 'categorias.id')
            ->where('categorias.nombre', $category)
            ->get();
        // $nombreCategoria = Categoria::select('categorias.nombre')
        //     ->join('cursos', 'cursos.id_categoria', '=', 'categorias.id')
        //     ->where('categorias.nombre', $category)
        //     ->get();
        return response()->json($courses);
    }

    public function getCoursesByAlphabeticalOrderAsc()
    {
        $courses = Curso::orderBy('nombre', 'asc')->get();
        return response()->json($courses);
    }
    public function getCoursesByAlphabeticalOrderDesc()
    {
        $courses = Curso::orderBy('nombre', 'desc')->get();
        return response()->json($courses);
    }

    public function getCoursesByCategoryAndAlphabeticalOrder($category, $order)
    {
        $courses = Curso::select('cursos.*')
        ->join('categorias', 'cursos.id_categoria', '=', 'categorias.id')
        ->where('categorias.nombre', $category);
            

        if ($order === 'asc') {
            $courses->orderBy('cursos.nombre', 'asc');
        } elseif ($order === 'desc') {
            $courses->orderBy('cursos.nombre', 'desc');
        }

        $courses = $courses->get();

        return response()->json($courses);
    }

    public function getCoursesByCreationDate($order)
    {
        $courses = Curso::select('cursos.*')
            ->join('categorias', 'cursos.id_categoria', '=', 'categorias.id');

        if ($order === 'asc') {
            $courses->orderBy('cursos.created_at', 'asc');
        } elseif ($order === 'desc') {
            $courses->orderBy('cursos.created_at', 'desc');
        }

        $courses = $courses->get();

        return response()->json($courses);
    }

    public function filtrarCursos(Request $request)
    {
        $category = $request->input('categoria');
        $orderAlfabetico = $request->input('ordenAlfabetico');
        $orderFecha = $request->input('ordenFecha');

        $courses = Curso::select('cursos.*')
        ->join('categorias', 'cursos.id_categoria', '=', 'categorias.id');

        if ($category) {
            $courses->where('categorias.nombre', $category);
        }
        if ($orderFecha) {
            $courses->orderBy('created_at', $orderFecha);
        }

        if ($orderAlfabetico) {
            $courses->orderBy('nombre', $orderAlfabetico);
        }

        $filteredCourses = $courses->get();

        return response()->json($filteredCourses);
    }

}
