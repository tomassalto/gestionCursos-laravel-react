<?php

use App\Http\Controllers\Api\V1\CursoController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


/*
Este código define un grupo de rutas con el prefijo 'v1'. Dentro de este grupo, se define una ruta de recurso API para la entidad 'cursos',
que utiliza el controlador 'CursoController'.
Esto significa que se generan automáticamente las rutas y métodos necesarios para realizar operaciones CRUD en la entidad 'cursos'.
 */

Route::group(['prefix' => 'v1'], function(){
    Route::apiResource('cursos', CursoController::class);
});

Route::post('/api/v1/cursos', 'CursoController@store');

// Route::put('api/v1/cursos/{curso}', 'CursoController@update');

