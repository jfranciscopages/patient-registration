<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Patient;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Mail;

class PatientController extends Controller
{

    public function index()
    {
        $patients = Patient::all();

        return response()->json($patients);
    }


    public function show($id)
    {
        $patient = Patient::find($id);

        if (!$patient) {
            return response()->json(['message' => 'Patient not found'], 404);
        }

        return response()->json($patient);
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'full_name' => ['required', 'regex:/^[\pL\s]+$/u'],
            'email' => 'required|email|ends_with:@gmail.com|unique:patients,email',
            'phone_country_code' => 'required|string|max:5|regex:/^\+?[0-9]{1,4}$/',
            'phone_number' => 'required|string|max:15|regex:/^[0-9]{4,15}$/',
            'document_photo' => 'required|image|mimes:jpg,jpeg|max:1024',
        ]);
        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        $photoPath = $request->file('document_photo')->store('documents', 'public');

        $patient = Patient::create([
            'full_name' => $request->full_name,
            'email' => $request->email,
            'phone_country_code' => $request->phone_country_code,
            'phone_number' => $request->phone_number,
            'document_photo' => $photoPath,
        ]);

        Mail::to($patient->email)->queue(mailable: new \App\Mail\PatientRegistered($patient));

        return response()->json(['message' => 'Patient registered successfully'], 201);
    }

}

