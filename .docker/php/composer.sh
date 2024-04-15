#!/bin/bash

# Navigate to the application directory
cd /var/www

# Check if Composer dependencies need to be installed
if [ ! -d "/var/www/vendor" ]; then
    # Install Composer dependencies
    composer install --no-interaction --optimize-autoloader
fi

# Check if application key needs to be generated
if ! php artisan key:check >/dev/null 2>&1; then
    # Generate application key (Laravel specific)
    php artisan key:generate
fi

# Check if database is available
if ! php artisan migrate:status >/dev/null 2>&1; then
    # Run migrations with seeding (if needed)
    php artisan migrate --seed
fi

# Check if storage link needs to be created
if [ ! -L "/var/www/public/storage" ]; then
    # Create storage link
    php artisan storage:link
fi