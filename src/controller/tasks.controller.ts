/* eslint-disable no-unused-vars */
/* eslint-disable class-methods-use-this */
import { NextFunction, Response, Request } from 'express';
import { ITask } from '../interfaces';
import { Task } from '../models';
import { HttpException } from '../exceptions';
import { TaskService } from '../services';

/**
 *
 * The controller of tasks
 * @class TaskControler
 */
class TaskControler {
  /**
   *
   * List all tasks
   * @static
   * @param {Request} req - The request
   * @param {Response} res - The response
   * @param {NextFunction} next - The next middleware in queue
   * @return {JSON} - A list of tasks
   * @memberof TaskControler
   */
  public static async list(req: Request, res: Response, next: NextFunction) {
    try {
      const tasks: Array<ITask> = await TaskService.list();
      res.json(tasks);
    } catch (error) {
      return next(new HttpException(500, error.message));
    }
  }

  /**
   *
   * create a new task
   * @static
   * @param {Request} req - The request
   * @param {Response} res - The response
   * @param {NextFunction} next - The next middleware in queue
   * @return {JSON} - A task creted
   * @memberof TaskControler
   */
  public static async create(req: Request, res: Response, next: NextFunction) {
    try {
      const { title } = req.body;
      if (!title) throw new HttpException(400, 'Title porperty is required');
      const task:ITask = new Task({ title });
      const taskSaved: ITask = await TaskService.create(task);
      res.json(taskSaved);
    } catch (error) {
      return next(new HttpException(error.status, error.message));
    }
  }

  /**
   *
   * Get task by id
   * @static
   * @param {Request} req - The request
   * @param {Response} res - The response
   * @param {NextFunction} next - The next middleware in queue
   * @return {JSON} - A list of tasks
   * @memberof TaskControler
   */
  public static async getById(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const task: ITask | null = await TaskService.getById(id);
      if (!task) throw new HttpException(404, 'Task not found');
      res.json(task);
    } catch (error) {
      return next(new HttpException(error.status, error.message));
    }
  }

  /**
   *
   * Remove task by id
   * @static
   * @param {Request} req - The request
   * @param {Response} res - The response
   * @param {NextFunction} next - The next middleware in queue
   * @return {JSON} - A list of tasks
   * @memberof TaskControler
   */
  public static async removeById(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const task: ITask | null = await TaskService.removeById(id);
      if (!task) throw new HttpException(404, 'Task not found');
      res.json(task);
    } catch (error) {
      return next(new HttpException(error.status, error.message));
    }
  }

  /**
   *
   * Update task by id
   * @static
   * @param {Request} req - The request
   * @param {Response} res - The response
   * @param {NextFunction} next - The next middleware in queue
   * @return {JSON} - A list of tasks
   * @memberof TaskControler
   */
  public static async updateById(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const { title } = req.body;
      if (!title) throw new HttpException(400, 'Title porperty is required');
      const taskUpdated: ITask | null = await TaskService.updateById(id, { title });
      if (!taskUpdated) throw new HttpException(404, 'Task not found');
      res.json(taskUpdated);
    } catch (error) {
      return next(new HttpException(error.status, error.message));
    }
  }
}
export default TaskControler;
