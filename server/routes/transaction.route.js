import express from 'express'
import { handleTransation } from '../controllers/transactionCtrl.js'
const router = express.Router()

router.post('/', handleTransation)

export { router as transactionRoutes }
