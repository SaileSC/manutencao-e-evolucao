FROM node

WORKDIR /app

COPY . /app

ENV NEXT_PUBLIC_BACKEND_API=http://localhost:4466

RUN npm install

RUN npm run build

CMD [ "npm", "run", "start" ]