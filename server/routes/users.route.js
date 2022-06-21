import { Router } from 'express'
import { createUser, fetchUser, fetchUsers } from '../controllers/userCtrl.js'

const router = Router()

router.get('/', fetchUsers)
router.get('/:userID', fetchUser)

router.post('/add', createUser)

export { router as userRoutes }
