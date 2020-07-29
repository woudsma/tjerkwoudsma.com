FROM node:10-alpine as builder

ARG REACT_APP_SANITY_PROJECT_ID
ENV REACT_APP_SANITY_PROJECT_ID=${REACT_APP_SANITY_PROJECT_ID}

ADD package*.json ./
RUN npm install --only=production
ADD . .
RUN npm run-script build

FROM nginx:alpine
COPY nginx.default.conf /etc/nginx/conf.d/default.conf
WORKDIR /usr/share/nginx/html
COPY --from=builder /build .

EXPOSE 5000
