FROM nginx
COPY server/static /usr/share/nginx/html
RUN unlink /var/log/nginx/error.log
RUN unlink /var/log/nginx/access.log
