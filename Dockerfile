# Usa uma imagem leve do Nginx
FROM nginx:alpine

# Copia os arquivos do seu repo para a pasta pública do Nginx
COPY . /usr/share/nginx/html