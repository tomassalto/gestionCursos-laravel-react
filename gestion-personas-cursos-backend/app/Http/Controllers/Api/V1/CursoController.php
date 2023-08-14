<?php

namespace App\Http\Controllers\Api\V1;

use Validator;
use App\Http\Controllers\Controller;
use App\Http\Requests\StoreCursoRequest;
use Illuminate\Http\Request;
use App\Models\Curso;

class CursoController extends Controller
{
    public function index(){
        return response()->json("Curso Index");
    }

    public function store(StoreCursoRequest $request){
        Curso::create($request->validated());
        return response()->json('Curso Created');
    }

    public function update(StoreCursoRequest $request, Curso $curso){
        $curso->update($request->validated());
        return response()->json("Curso Updated");
    }
}
