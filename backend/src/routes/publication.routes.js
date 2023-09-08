// Requires
import { Router } from 'express'
import { solicitudesCTRL, getPublicationsCTRL, updatePublicationCTRL, deletePublicationCTRL, createPublicationCTRL, getPublicationCTRL } from '../controllers/blog.contoller.js'
import { upload } from '../middlewares/upload.middleware.js'
import { handleError } from '../middlewares/error.middleware.js'
import { validadorDePublicacion } from '../validators/publicacion.validator.js'
import { validadorDeId } from '../validators/id.validator.js'
const router = Router()
// Routes
router.get('/', getPublicationsCTRL)
router.get('/solicitudes', solicitudesCTRL)
router.post('/solicitudes', upload, validadorDePublicacion, createPublicationCTRL)
router.get('/:id', getPublicationCTRL)
router.get('/delete/:id', validadorDeId, deletePublicationCTRL)
router.post('/actualizar/:id', updatePublicationCTRL)
router.use(handleError)
// Routes Exports
export { router as publicationRouter }
