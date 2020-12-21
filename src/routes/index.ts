import { Router } from 'express';
import taskRouter from './task.route';

const router = Router();
const prefix: string = '/api';

router.use(`${prefix}/task`, taskRouter);

export default router;
