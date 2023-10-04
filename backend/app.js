import { app } from './src/config/app.config.js'
import { envConfig } from './src/config/env.config.js'
const PORT = envConfig.server.PORT

async function bootstrap () {
  app.listen(PORT, async () => {
    console.log(`🔥 App ready an listening on PORT ${envConfig.server.PORT} 🔥`)
  })
}

bootstrap()
