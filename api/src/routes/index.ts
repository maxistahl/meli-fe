import { Router } from 'express';
import itemRouter from '../product/routes';

const router = Router();
router.use(itemRouter.path, itemRouter.routes);

export default router;