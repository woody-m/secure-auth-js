import { Router } from 'express';
import { authenticateToken } from '../middlewares/auth.middleware.js';
import { getProfile } from '../controllers/profile.controller.js';

const router = Router();

router.get('/profile', authenticateToken, getProfile);

export default router;


