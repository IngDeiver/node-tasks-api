import {
  NextFunction, Request, Response, Router,
} from 'express';
import { TaskController } from '../controller';

const router = Router();

router.get('/', (req: Request, res: Response, next: NextFunction) => TaskController.list(req, res, next));
router.post('/', (req: Request, res: Response, next: NextFunction) => TaskController.create(req, res, next));
export default router;
