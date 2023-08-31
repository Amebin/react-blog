import { config } from 'dotenv'
import express from 'express'
import { helmet } from 'helmet'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import { usersRoutes } from './src/routes/users.routes.js'

config()
const PORT = process.env.PORT
const app = express()
app.use(express.json())
app.use(bodyParser.json())
app.use(helmet)

app.use('/api/users', usersRoutes())
app.all('*', (req, res) => {
  res.status(404).send({ status: 'ERR', data: 'No se encuentra el endpoint solicitado' })
})
app.listen(PORT, async () => {
  try {
    await mongoose.connect(MONGODB_URI)
    console.log(`Backend inicializado puerto ${PORT}`)
  } catch (err) {
    console.error(err.message)
  }
})
