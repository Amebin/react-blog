// Requires
import { Router } from 'express'
/* import { getAllPublications, getPublication, createPublication, updatePublication, deletePublication } from '../controllers/blog.contoller.js'
 */
import controller from '../controllers/blog.contoller.js'
import { validadorDePublicacion } from '../validators/publicacion.validator.js'
import { validadorDeId } from '../validators/id.validator.js'
const router = Router()
// Routes
router.get('/', controller.getAllPublications)
router.get('/:id', validadorDeId, controller.getPublication)
router.post('/create', validadorDePublicacion, controller.createPublication)
router.put('/update/:id', controller.updatePublication)
router.delete('/delete/:id', validadorDeId, controller.deletePublication)
// Routes Exports
export { router as publicationRouter }
