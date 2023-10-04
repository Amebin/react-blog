// Requires
import { Router } from 'express'
import { registerController, loginController, updateUserController, deleteUserController } from '../controllers/user.controller.js'
const router = Router()
// Routes
router.post('/register', registerController)
router.post('/login', loginController)
router.put('/update/:id', updateUserController)
router.delete('/delete/:id', deleteUserController)
// Routes Exports
export { router as userRouter }
