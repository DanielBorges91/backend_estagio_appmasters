import express from 'express';

const app = express();

app.get('/', (request, response) => {
  return response.status(200).json({alive: true});
});

export { app };