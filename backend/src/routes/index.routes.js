import { Router } from 'express'
import { publicationRouter } from './publication.routes.js'

const router = Router()

router.use('/publication', publicationRouter)
export { router }
