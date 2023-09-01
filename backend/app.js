import { config } from 'dotenv'
import express, { json } from 'express'
import { helmet } from 'helmet'
import { usersRoutes } from './src/routes/users.routes.js'

config()
const PORT = process.env.PORT || 3000
const app = express()
app.use(json())
app.use(helmet)

app.use('/api/users', usersRoutes())
app.all('*', (req, res) => {
  res.status(404).send({ status: 'ERR', data: 'No se encuentra el endpoint solicitado' })
})

app.listen(PORT, async () => {
  console.log(`Backend inicializado puerto ${PORT}`)
})
