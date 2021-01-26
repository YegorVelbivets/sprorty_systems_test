#!/bin/bash

cd /var/www/html/app
composer install
php artisan migrate

docker-php-entrypoint php-fpm