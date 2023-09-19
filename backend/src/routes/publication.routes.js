// Requires
import { Router } from 'express'
import { updatePublication, deletePublication, createPublication, getPublication, getAllPublications } from '../controllers/blog.contoller.js'
import { validadorDePublicacion } from '../validators/publicacion.validator.js'
import { validadorDeId } from '../validators/id.validator.js'
const router = Router()
// Routes
router.get('/', getAllPublications)
router.post('/solicitudes', validadorDePublicacion, createPublication)
router.get('/:id', getPublication)
router.delete('/delete/:id', validadorDeId, deletePublication)
router.put('/update/:id', updatePublication)
// Routes Exports
export { router as publicationRouter }
