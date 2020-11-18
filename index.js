const Koa = require('koa');
const cors = require('@koa/cors');
const bodyparser = require('koa-bodyparser');
const logger = require("./src/middlewares/logger");
const server = new Koa();
const router = require('./src/routes');


const PORT = process.env.PORT || 8081;

server.use(bodyparser());
server.use(cors());
server.use(logger);
server.use(router.routes());

server.listen(PORT, '0.0.0.0', null, () => console.log('Rodando na porta:', PORT));