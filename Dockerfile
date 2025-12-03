# Imagen base con PHP 8 y servidor embebido
FROM php:8.2-cli

# Copiar archivos del proyecto
WORKDIR /app
COPY . /app

# Exponer el puerto que Render usa
EXPOSE 10000

# Iniciar el servidor PHP
CMD ["php", "-S", "0.0.0.0:10000"]
