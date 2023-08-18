<?php

// use App\Http\Controllers\Api\V1\CursoController;
// use App\Http\Controllers\PersonaRegister;
use App\Http\Controllers\Api\PersonaController;
use App\Http\Controllers\Api\CursoController;
use App\Http\Controllers\Api\InscripcionController;
use App\Http\Controllers\Api\ReporteController;
// use App\Http\Controllers\Api\V1\UserRegister;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

//Esta ruta apunta a Persona controller para realizar registro de persona
Route::post('/persona',  [PersonaController::class, 'register'])->name('persona');
//Esta ruta apunta a Curso controller para devolver todos los registro de cursos
Route::get('/curso', [CursoController::class, 'mostrarCursos'])->name('curso');
//Esta ruta apunta a Inscripcion controller para realizar la inscripcion y guardarlo en la base de datos
Route::post('/inscripcion', [InscripcionController::class, 'store'])->name('inscripcion');
//Esta ruta apunta a Inscripcion controller tomando el id del curso para desinscribir a la persona del curso
Route::post('/curso/{cursoId}/desinscripcion', [InscripcionController::class, 'desinscribirDeCurso'])->name('desinscripcion');
//Esta ruta apunta a Reporte tomando el id del curso controller para realizar registro de las estadisticas del curso
Route::get('/reporte/{cursoId}', [ReporteController::class ,'obtenerReporte'])->name('reporte');
//Esta ruta apunta a Curso controller para realizar las consultas a partir de las 3 querys existentes
Route::get('/curso/filtrar', [CursoController::class, 'filtrarCursos']);
//Esta ruta apunta a Curso controller para mostrar los ultimos 5 cursos agregados
Route::get('/curso/ultimos-5', [CursoController::class, 'getLastAddedCourses']);

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

