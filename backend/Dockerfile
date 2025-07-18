FROM php:8.2-cli

WORKDIR /var/www/html

RUN apt-get update && apt-get install -y \
    libpq-dev zip unzip git curl libzip-dev \
    && docker-php-ext-install pdo_pgsql

COPY . .

RUN curl -sS https://getcomposer.org/installer | php && \
    mv composer.phar /usr/local/bin/composer && \
    composer install

CMD php artisan serve --host=0.0.0.0 --port=8000
