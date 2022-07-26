import express from 'express';

const app = express();

app.get('/', (request, response) => {
  return response.status(200).json({alive: true});
});

app.listen(3333, () => {
  console.log("Server iniciado na porta 3333!")
});