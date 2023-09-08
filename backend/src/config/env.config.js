import 'dotenv/config'

export const envConfig = {
  database: {
    MONGODB_URI: process.env.MONGODB_URI
  },
  server: {
    PORT: process.env.PORT
  },
  jwt: {
    secret: process.env.JWT_SECRET,
    expires: process.env.JWT_EXPIRES
  }
}
