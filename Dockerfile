FROM php:8.2-apache

# Install mysqli
RUN docker-php-ext-install mysqli

# Install Redis extension
RUN pecl install redis \
    && docker-php-ext-enable redis