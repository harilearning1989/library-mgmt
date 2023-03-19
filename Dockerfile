# stage 1

FROM node:alpine AS my-app-build
WORKDIR /app
COPY . .
RUN npm ci && npm run build

# stage 2

FROM nginx:alpine
COPY --from=library-mgmt /app/dist/app-to-run-inside-docker /usr/share/nginx/html
EXPOSE 80

#docker build -t library-mgmt .
#docker run -it --rm -p 9000:80 angular-app
