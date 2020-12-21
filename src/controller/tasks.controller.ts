/* eslint-disable no-unused-vars */
/* eslint-disable class-methods-use-this */
import { NextFunction, Response, Request } from 'express';
import { ITask } from 'interfaces';
import { Task } from '../models';
import { HttpException } from '../exceptions';
import { TaskRepository } from '../repository';

class TaskControler {
  public static async list(req: Request, res: Response, next: NextFunction) {
    try {
      const tasks: Array<ITask> = await TaskRepository.list();
      res.json(tasks);
    } catch (error) {
      return next(new HttpException(500, error.message));
    }
  }

  public static async create(req: Request, res: Response, next: NextFunction) {
    try {
      const { title } = req.body;
      if (!title) return next(new HttpException(500, 'Title porperty is required'));
      const task:ITask = new Task({ title });
      const taskSaved: ITask = await TaskRepository.create(task);
      res.json(taskSaved);
    } catch (error) {
      return next(new HttpException(500, error.message));
    }
  }
}
export default TaskControler;
