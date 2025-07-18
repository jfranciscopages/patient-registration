<x-mail::message>
# Hello {{ $patient->full_name }}!

Thank you for registering in our system. This is a confirmation message that your registration was successful.

<x-mail::panel>
**Email:** {{ $patient->email }}
**Phone:** {{ $patient->phone_country_code }} {{ $patient->phone_number }}
</x-mail::panel>

<x-mail::button :url="'http://localhost:8000'">
View site
</x-mail::button>

Thank you,<br>
{{ config('app.name') }}
</x-mail::message>
