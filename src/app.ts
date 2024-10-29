import fastify from 'fastify'
import { transactionsRoutes } from './routes/transactions'
import cookie from '@fastify/cookie'

export const app = fastify()

app.register(cookie) // para começar a trabalhar com cookies nas rotas

app.register(transactionsRoutes, {
  prefix: 'transactions',
})
