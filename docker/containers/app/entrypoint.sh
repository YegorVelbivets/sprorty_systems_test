#!/bin/bash

cd /var/www/html/app
composer install
npm i npm@latest -g

docker-php-entrypoint php-fpm