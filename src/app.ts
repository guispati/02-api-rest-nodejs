import fastify from 'fastify';
import cookie from '@fastify/cookie';

import { env } from './env';
import { transactionsRoutes } from './routes/transactions';

export const app = fastify();

app.register(cookie);

// Exemplo handler global
app.addHook('preHandler', async (request, response) => {
    console.log("Requisição enviada")
});

app.register(transactionsRoutes, {
    prefix: 'transactions',
});