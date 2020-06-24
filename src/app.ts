import express from 'express'
import routes from './routes'
import cors from 'cors'
import morgan from 'morgan'
import 'reflect-metadata'
import { createConnection } from 'typeorm'

const app = express()

const configureApp = () => {
  app.use(express.json())
  app.use(cors())
  app.use(morgan('tiny'))
  app.use('/', routes)
  return app
}

export default async () => {
  await createConnection().catch(error => console.log('TypeORM ERROR: ', error))
  const app = configureApp()
  return app
}
