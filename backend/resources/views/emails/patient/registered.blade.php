<x-mail::message>
# ¡Hola {{ $patient->full_name }}!

Gracias por registrarte en nuestro sistema. Este es un mensaje de confirmación de que tu registro fue exitoso.

<x-mail::panel>
**Email:** {{ $patient->email }}
**Teléfono:** {{ $patient->phone_country_code }} {{ $patient->phone_number }}
</x-mail::panel>

<x-mail::button :url="'http://localhost:8000'">
Ver sitio
</x-mail::button>

Gracias,<br>
{{ config('app.name') }}
</x-mail::message>
