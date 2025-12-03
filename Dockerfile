# Dockerfile
FROM php:8.2-cli

# Copiamos todo el código
COPY . /app
WORKDIR /app

# Exponer el puerto que Render usará
EXPOSE 10000

# Iniciar el servidor PHP
CMD ["php", "-S", "0.0.0.0:10000"]
