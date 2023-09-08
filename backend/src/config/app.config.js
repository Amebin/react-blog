import 'dotenv/config'
import express, { json } from 'express'
import helmet from 'helmet'
import './bd.config.js'
import morgan from 'morgan'
import cors from 'cors'
import { router } from '../routes/index.routes.js'
/* import { usersRoutes } from './src/routes/users.routes.js' */
const app = express()

app.use(json())
app.use(cors({ origin: '*' }))
app.use(helmet())
app.use(morgan('tiny'))
app.use('/api', router)
/* app.use('/api/users', usersRoutes()) */
app.all('*', (req, res) => {
  res.status(404).send({ status: 'ERR', data: 'No se encuentra el endpoint solicitado' })
})

export { app }
