import { fetchUsers } from "../controllers/userCtrl"

const router = Router()


router.get('/api', fetchUsers)