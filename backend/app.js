import { app } from './src/config/app.config.js'
import { envConfig } from './src/config/env.config.js'

async function bootstrap () {
  app.listen(envConfig.server.PORT, async () => {
    console.log(`🔥 App ready an listening on PORT ${envConfig.server.PORT} 🔥`)
  })
}

bootstrap()
