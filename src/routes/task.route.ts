import {
  NextFunction, Request, Response, Router,
} from 'express';
import { IRoute } from '../interfaces';
import { TaskController } from '../controller';
import { isDefinedParamMiddleware, validationMiddleware } from '../middlewares';
import { TaskDTO } from '../dtos';

/**
 *
 * Managament the routes of task resource
 * @class TaskRouter
 * @implements {IRoute}
 */
class TaskRouter implements IRoute {
  public router = Router();

  public pathIdParam = '/:id';

  constructor() {
    this.createRoutes();
  }

  createRoutes(): void {
    this.router.get(
      this.pathIdParam,
      isDefinedParamMiddleware(),
      (req: Request, res: Response, next: NextFunction) => TaskController.getById(req, res, next),
    );
    this.router.get('/', (req: Request, res: Response, next: NextFunction) => TaskController.list(req, res, next));
    this.router.post(
      '/',
      validationMiddleware(TaskDTO),
      (req: Request, res: Response, next: NextFunction) => TaskController.create(req, res, next),
    );
    this.router.put(
      this.pathIdParam,
      isDefinedParamMiddleware(),
      validationMiddleware(TaskDTO, true),
      (req: Request, res: Response, next: NextFunction) => TaskController
        .updateById(req, res, next),
    );
    this.router.delete(
      this.pathIdParam,
      isDefinedParamMiddleware(),
      (req: Request, res: Response, next: NextFunction) => TaskController
        .removeById(req, res, next),
    );
  }
}
export default new TaskRouter().router;
