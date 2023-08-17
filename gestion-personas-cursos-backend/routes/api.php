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


/*
Este código define un grupo de rutas con el prefijo 'v1'. Dentro de este grupo, se define una ruta de recurso API para la entidad 'cursos',
que utiliza el controlador 'CursoController'.
Esto significa que se generan automáticamente las rutas y métodos necesarios para realizar operaciones CRUD en la entidad 'cursos'.
 */

Route::post('/persona',  [PersonaController::class, 'register'])->name('persona');
// Route::get('/personas/{personaId}/curso', [CursoController::class, 'cursosDePersona']);
Route::get('/curso', [CursoController::class, 'mostrarCursos'])->name('curso');
Route::post('/inscripcion', [InscripcionController::class, 'store'])->name('inscripcion');
Route::get('/reporte/{cursoId}', [ReporteController::class ,'obtenerReporte'])->name('reporte');

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

