# Stage 1
FROM node:10-alpine as react-app

RUN mkdir -p /src/app

WORKDIR /src/app

COPY package*.json ./

RUN npm install

COPY . ./

RUN npm run build

# Stage 2
FROM nginx:alpine

COPY --from=react-app /src/app/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]