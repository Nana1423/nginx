FROM nginx:latest
COPY nginx.conf /etc/nginx/nginx.conf
COPY index.html /usr/share/nginx/html/index.html
COPY site1/ /usr/share/nginx/html/site1
COPY site2/ /usr/share/nginx/html/site2
COPY images/ /usr/share/nginx/html/images
EXPOSE 8080