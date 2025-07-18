<?php

namespace App\Mail;

use App\Models\Patient;
use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class PatientRegistered extends Mailable
{
    use Queueable, SerializesModels;

    public Patient $patient;

    public function __construct(Patient $patient)
    {
        $this->patient = $patient;
    }

    public function build()
    {
        return $this->subject('Patient Registration Successful')
            ->markdown('emails.patient.registered', [
                'patient' => $this->patient
            ]);

    }
}
