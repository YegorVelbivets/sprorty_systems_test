FROM php:7.4-fpm

RUN apt-get update && \
    apt-get install -qy --no-install-recommends \
        git libmcrypt-dev libpq-dev zip unzip wget openssl postgresql-client npm libzip-dev

RUN docker-php-ext-configure zip && \
    docker-php-ext-install pdo_pgsql bcmath zip

RUN pecl install xdebug

RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

COPY entrypoint.sh /usr/bin/entrypoint.sh
RUN chmod +x /usr/bin/entrypoint.sh

WORKDIR /var/www/html/app

ENTRYPOINT [ "/bin/bash", "-c", "/usr/bin/entrypoint.sh"]