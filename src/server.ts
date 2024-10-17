import fastify from 'fastify'
import crypto from 'node:crypto'
import { knex } from './database'
import { env } from './env'

interface TransactionProps {
  id: string
  title: string
  amount: number
}

const app = fastify()

app.get('/', async () => {
  const transaction = await knex<TransactionProps>('transactions')
    .where('amount', 1000)
    .select('*')

  return transaction
})

app.listen({ port: env.PORT }).then(() => {
  console.log('Server running!')
})
