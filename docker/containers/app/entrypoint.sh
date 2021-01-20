#!/bin/bash

cd /var/www/html/app
composer install

docker-php-entrypoint php-fpm