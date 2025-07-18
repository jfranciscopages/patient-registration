<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Carbon;

class PatientSeeder extends Seeder
{
    public function run(): void
    {
        DB::table('patients')->insert([
            [
                'full_name' => 'Ken Jobs',
                'email' => 'kenjobs@gmail.com',
                'phone_country_code' => '+55',
                'phone_number' => '4578995412',
                'document_photo' => 'documents/CytKg53uCWBzw09da7QFqmo6LiwZQsEDKQxmD4kY.jpg',
                'created_at' => Carbon::parse('2025-07-18 14:25:24'),
                'updated_at' => Carbon::parse('2025-07-18 14:25:24'),
            ],
            [
                'full_name' => 'Camila Rojas',
                'email' => 'camila.rojas@gmail.com',
                'phone_country_code' => '+57',
                'phone_number' => '3123456789',
                'document_photo' => 'documents/d8qwBIL3VEGiOyeLlZMiSOY33mC1emwRIypFj8XW.jpg',
                'created_at' => Carbon::parse('2025-07-18 14:42:51'),
                'updated_at' => Carbon::parse('2025-07-18 14:42:51'),
            ],
            [
                'full_name' => 'Johan Svensson',
                'email' => 'johan.svensson@gmail.com',
                'phone_country_code' => '+46',
                'phone_number' => '701234567',
                'document_photo' => 'documents/vzuzToPmKjDERhTDaIWRizhwCCuxKuqAGrjHEpKS.jpg',
                'created_at' => Carbon::parse('2025-07-18 14:47:18'),
                'updated_at' => Carbon::parse('2025-07-18 14:47:18'),
            ],
            [
                'full_name' => 'Diego Maradona',
                'email' => 'diegomaradona@gmail.com',
                'phone_country_code' => '+54',
                'phone_number' => '1010101010',
                'document_photo' => 'documents/n7VHzYmRfqgrxYsfJsPbrsBaitRA1N85LZIbGMiP.jpg',
                'created_at' => Carbon::parse('2025-07-18 14:57:29'),
                'updated_at' => Carbon::parse('2025-07-18 14:57:29'),
            ],
            [
                'full_name' => 'Martín Fernández',
                'email' => 'martinfernandez@gmail.com',
                'phone_country_code' => '+34',
                'phone_number' => '612345987',
                'document_photo' => 'documents/28y118Q4tzw8R42UKDcEas6jZz5KB0h4OPv9rz3K.jpg',
                'created_at' => Carbon::parse('2025-07-18 14:53:20'),
                'updated_at' => Carbon::parse('2025-07-18 14:53:20'),
            ],
        ]);
    }
}
