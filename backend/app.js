import { config } from 'dotenv'
import express from 'express'
import { helmet } from 'helmet'
config()
const PORT = process.env.PORT
const app = express()
app.use(helmet)
app.listen(PORT)
