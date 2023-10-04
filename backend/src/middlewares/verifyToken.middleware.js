import { verify } from 'jsonwebtoken'
import { envConfig } from './src/config/env.config.js'

const SECRET = envConfig.jwt.SECRET

export async function VerifyToken (req, res, next) {
  const usstoken = req.headers.authorization
  const token = usstoken?.split(' ')[1]
  if (!token) return next(('No token provided'))
  try {
    const decoded = verify(token, SECRET)
    const { id } = decoded
    req.body.id = id
    next()
  } catch (error) {
    return next('Invalid token')
  }
}
