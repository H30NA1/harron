# Use the latest PHP image as base
FROM php:latest

# Copy custom PHP configuration files
COPY php.ini /usr/local/etc/php/
COPY docker.conf /usr/local/etc/php-fpm.d/docker.conf
COPY .bashrc /root/

# Install required system dependencies
RUN apt-get update \
  && apt-get install -y build-essential zlib1g-dev default-mysql-client curl gnupg procps vim git unzip libzip-dev libpq-dev libicu-dev libfreetype6-dev libjpeg62-turbo-dev libpng-dev nodejs npm \
  && rm -rf /var/lib/apt/lists/*

# Install PHP extensions
RUN docker-php-ext-configure intl \
  && docker-php-ext-install intl zip pdo_mysql pdo_pgsql pgsql gd pcntl bcmath exif

# Install Redis extension
RUN pecl install redis \
  && docker-php-ext-enable redis

# Install Xdebug extension
RUN pecl install xdebug \
  && docker-php-ext-enable xdebug \
  && echo "zend_extension=xdebug" > /usr/local/etc/php/conf.d/docker-php-ext-xdebug.ini

# Install Node.js, NPM, and Yarn
RUN curl -sL https://deb.nodesource.com/setup_18.x | bash - \
  && apt-get install -y nodejs \
  && npm install npm@latest -g \
  && npm install yarn -g

# Install Composer
RUN php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');" \
  && php composer-setup.php --install-dir=/usr/local/bin --filename=composer \
  && php -r "unlink('composer-setup.php');"

# Set Composer global configurations
ENV COMPOSER_ALLOW_SUPERUSER 1
ENV COMPOSER_HOME /composer
ENV PATH $PATH:/composer/vendor/bin
RUN composer config --global process-timeout 3600 \
  && composer global require "laravel/installer"

# Clone additional repository
WORKDIR /root
RUN git clone https://github.com/seebi/dircolors-solarized

# Copy entrypoint script into container
COPY composer.sh /usr/local/bin/entrypoint
RUN chmod +x /usr/local/bin/entrypoint

# Expose port (if necessary)
EXPOSE 5173

# Set working directory for PHP application
WORKDIR /var/www

# Use custom entrypoint script
# ENTRYPOINT ["/usr/local/bin/entrypoint"]