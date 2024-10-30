import { knex as setupKnex, type Knex } from 'knex'
import { databaseUrl, env } from './env'

export const config: Knex.Config = {
  client: env.DATABASE_CLIENT,
  connection: databaseUrl,
  useNullAsDefault: true,
  migrations: {
    extension: 'ts',
    directory: './db/migrations',
  },
}

export const knex = setupKnex(config)
