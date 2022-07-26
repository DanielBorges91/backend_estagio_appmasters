# Processo seletivo estágio App Masters

Processo de seleção para estágio JavaScript da [App Masters](https://appmasters.io)

# O Projeto

O objetivo deste projeto é ajudar pessoas que desejam doar computadores usados, e que estes sejam destinados às pessoas que estejam precisando, ao invés de irem para reciclagem.

Para isso precisamos criar um site/plataforma/sistema por onde o interessado em doar poderá
incluir sua doação, sabendo que se fará bom uso aquele equipamento.

## 1ª Etapa - Bootstraping

### Backend

O backend será uma API do projeto de doação, que receberá os dados enviados pelos usuários no frontend, e também retornará informações (nas próximas etapas).

- Criar projeto usando Node puro (sem framework) e express
- Ter apenas uma rota GET, a raiz (`/`)
- Na raiz retornar status 200, um objeto json `{alive: true}` (sempre `true`)
- Criar um teste (com jest, superTest, ou [node:test](https://nodejs.org/docs/latest-v18.x/api/test.html)), que faça uma chamada em `/` e dê sucesso caso o resultado seja `{alive: true}`

# Building

Você precisa ter o [Node.js](https://nodejs.org) instalado em seu computador.
```bash
git clone https://github.com/DanielBorges91/backend_estagio_appmasters.git
cd backend_estagio_appmasters
yarn install
yarn dev
```

# Tests

```bash
yarn test
```