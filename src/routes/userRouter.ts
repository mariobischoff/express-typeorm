import { Router } from 'express'
import UserController from '../controllers/UserController'

const router = Router()

router.get('/', UserController.listAll)
router.post('/', UserController.create)

export default router
