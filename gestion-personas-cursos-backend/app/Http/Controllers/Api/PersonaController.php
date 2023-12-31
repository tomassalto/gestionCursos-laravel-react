<?php

namespace App\Http\Controllers\Api;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Spatie\FlareClient\Api;
use App\Models\Persona;

use function Laravel\Prompts\error;

class PersonaController extends Controller
{
    /*
    *Verifica que la persona exista, si no la crea a partir de los datos recibidos por parametro
    */
    public function register(Request $request)
    {
        // Validar los datos recibidos en la solicitud
        $data = $request->validate([
            'dni' => ['required','numeric','unique:personas', 'digits_between:8,9'], // Validar que el DNI sea único
            'nombre' => 'required',
            'apellido' => 'required',
            'edad' => 'required|integer|min:13|max:100',
            'genero' => 'required|in:masculino,femenino'
        ]);       
        $persona = Persona::where('dni', $data['dni'])->first();
        
        if(!$persona){
            $persona = new Persona;
            $persona->dni = $data['dni'];
            $persona->nombre = $data['nombre'];
            $persona->apellido = $data['apellido'];
            $persona->genero = $data['genero'];
            $persona->edad = $data['edad'];

            $persona->save();

            return response()->json(['message' => 'Persona registrada exitosamente'], 201);
        }else{
            return response()->json(['message' => 'No se registro exitosamente'], 409);
        }
     
    }   
   
}

?>