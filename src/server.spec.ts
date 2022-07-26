import { response } from 'express';
import request from 'supertest';
import { app } from './app';

describe("Teste simples", ()=> {
  test("Verifica se o retorno da função é true", async() => {
    const res = await request(app).get('/');

    expect(res.body).toEqual({alive: true})
  });

  test("Verifica se o retorno possui status 200", async () => {
    const res = await request(app).get('/');

    expect(res.statusCode).toEqual(200);
  })

  test("Verifica se possuímos a propriedade alive", async() => {
    const res = await request(app).get('/');

    expect(res.body).toHaveProperty('alive')
  });
})