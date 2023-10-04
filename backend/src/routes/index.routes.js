import { Router } from 'express'
import { publicationRouter } from './publication.routes.js'
import { errorResponso } from '../helpers/response_error.helper.js'
const router = Router()

router.use('/publication', publicationRouter)
router.use((error, req, res, next) => {
  console.log(error)
  const { statusCode, message } = error
  errorResponso(res, statusCode, message)
})
export { router }
