import { Router } from 'express';
import { authenticateToken } from '../middlewares/auth.middleware.js';
import { authorizeRoles } from '../middlewares/role.middleware.js';
import { adminArea } from '../controllers/admin.controller.js';

const router = Router();

router.get(
  '/admin',
  authenticateToken,
  authorizeRoles('admin'),
  adminArea
);

export default router;

