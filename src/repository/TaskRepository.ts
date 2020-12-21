/* eslint-disable no-unused-vars */
/* eslint-disable class-methods-use-this */
import { ICrud, ITask } from '../interfaces';
import { Task } from '../models';

class TaskRepository implements ICrud<ITask, string> {
  async create(task: ITask): Promise<ITask> {
    return task.save();
  }

  async list(): Promise<Array<ITask>> {
    return Task.find({});
  }

  async getById(id: string): Promise<ITask> {
    return new Task();
  }

  async remove(task: ITask): Promise<ITask> {
    return new Task();
  }

  async removeById(id: string): Promise<ITask> {
    return new Task();
  }

  async update(task: ITask): Promise<ITask> {
    return new Task();
  }

  async updateById(id: string): Promise<ITask> {
    return new Task();
  }
}
export default new TaskRepository();
