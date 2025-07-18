# Patient Registration API - Backend

This project provides a REST API to register and retrieve patients, including document photo upload.

## Technologies

- Laravel  
- PostgreSQL  
- Docker  
- Mailhog (accessible at port `8025`)  
- Seeder with sample patients  

## Installation with Docker

### 1. Clone the repository

```bash
git clone https://github.com/youruser/patient-registration.git
cd patient-registration/backend
```
### 2. Start the containers
```bash
docker-compose up --build
```
### 3. Access the backend container
```bash
docker exec -it patient_backend bash
```
### 4. Setup environment and app key
```bash
cp .env.example .env
php artisan key:generate
```
### 5. Run the database migrations
```bash
php artisan migrate
```
### 6. Seed sample patient data
```bash
php artisan db:seed --class=PatientSeeder
```
### 7. Create symbolic link to access uploaded images
bash
Copiar código

```bash
php artisan storage:link
```
### 8. Email sending (used in background)
```bash
php artisan queue:work
```


---
The API will be available at:
http://localhost:8000/api/patients

Use Mailhog to view emails at:
http://localhost:8025/
