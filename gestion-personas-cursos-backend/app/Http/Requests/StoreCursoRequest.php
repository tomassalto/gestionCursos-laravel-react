<?php

namespace App\Http\Requests;

use Illuminate\Validation\Rule;
use Illuminate\Foundation\Http\FormRequest;

class StoreCursoRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array|string>
     */
    public function rules(): array
    {
        return [
            'nombre' => ['required', 'min:3', 'max:30'],
            // 'categoria' => ['required', 'unique:cursos,categoria,'. $this->curso->id]
            'categoria' => ['required', Rule::unique('cursos')->ignore($this->curso)]
        ];
    }
}
