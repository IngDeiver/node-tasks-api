import {
  NextFunction, Request, Response, Router,
} from 'express';
import { TaskController } from '../controller';
import { validationMiddleware } from '../middlewares';
import { TaskDTO } from '../dtos';

const router = Router();

router.get('/', (req: Request, res: Response, next: NextFunction) => TaskController.list(req, res, next));
router.get('/:id', (req: Request, res: Response, next: NextFunction) => TaskController.getById(req, res, next));
router.post('/', validationMiddleware(TaskDTO, 'body'), (req: Request, res: Response, next: NextFunction) => TaskController.create(req, res, next));
router.put('/:id', validationMiddleware(TaskDTO, 'body', true), (req: Request, res: Response, next: NextFunction) => TaskController.updateById(req, res, next));
router.delete('/:id', (req: Request, res: Response, next: NextFunction) => TaskController.removeById(req, res, next));
export default router;
