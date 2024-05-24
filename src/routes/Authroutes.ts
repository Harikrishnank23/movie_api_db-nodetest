import { Router } from 'express';
import { authUser, registerUser } from '../controllers/Authcontrol';


const router: Router = Router();

router.post('/register', registerUser);
router.post('/login', authUser);

export default router;