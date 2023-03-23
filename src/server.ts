import fastify from 'fastify';
import crypto from 'node:crypto';
import cookie from '@fastify/cookie';

import { knex } from './database';
import { env } from './env';
import { transactionsRoutes } from './routes/transactions';

const app = fastify();

app.register(cookie);

// Exemplo handler global
app.addHook('preHandler', async (request, response) => {
    console.log("Requisição enviada")
});

app.register(transactionsRoutes, {
    prefix: 'transactions',
});

app.listen({
    port: env.PORT,
}).then(() => {
    console.log('HTTP Server Running!');
})