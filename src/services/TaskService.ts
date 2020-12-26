/* eslint-disable class-methods-use-this */
import { Task } from '../models';
import { ICrud, ITask } from '../interfaces';
import { TaskRepository } from '../repository';

/**
 *
 * The task service,layer of repository pattern
 * @class TaskService
 * @implements {ICrud<ITask, string>}
 */
class TaskService implements ICrud<ITask, string> {
  /**
   *
   * Create a new task
   * @param {ITask} task - The task to create
   * @return {Promise<ITask>}  A task created
   * @memberof TaskService
   */
  async create(task: ITask): Promise<ITask> {
    return TaskRepository.create(task);
  }

  /**
   *
   * List all tasks
   * @return {Promise<Array<ITask>>}  A list of tasks
   * @memberof TaskService
   */
  async list(): Promise<Array<ITask>> {
    return TaskRepository.list();
  }

  /**
   *
   * Find task by id
   * @param {string} id - The id to find
   * @return {Promise<ITask>}  A task
   * @memberof TaskService
   */
  async getById(id: string): Promise<ITask | null> {
    return TaskRepository.getById(id);
  }

  /**
   *
   * Remove a task
   * @param {ITask} task - The task to remove
   * @return {Promise<ITask>}  A task removed
   * @memberof TaskService
   */
  async remove(task: ITask): Promise<ITask> {
    return TaskRepository.remove(task);
  }

  /**
   *
   * Remove task by id
   * @param {string} id - The id to find
   * @return {Promise<ITask>}  A task removed
   * @memberof TaskService
   */
  async removeById(id: string): Promise<ITask | null> {
    const taskToDelete = await this.getById(id);
    if (taskToDelete) await taskToDelete.remove();
    return taskToDelete;
  }

  /**
   *
   * Update a task
   * @param {ITask} task - The task to updated
   * @return {Promise<ITask>}  A task updated
   * @memberof TaskService
   */
  async update(task: ITask): Promise<ITask> {
    return TaskRepository.update(task);
  }

  /**
   *
   * Update task by if
   * @param {string} id - The id to find
   * @param {ITask} task - The task to updated
   * @return {Promise<ITask>} A task updated
   * @memberof TaskService
   */
  async updateById(id: string, body: Object): Promise<ITask | null > {
    // eslint-disable-next-line no-unused-vars
    return new Promise<ITask | null>((resolve, reject) => {
      Task.findOneAndUpdate({ _id: id }, { ...body }, { new: true },
        (error, task: ITask | null) => resolve(task));
    });
  }
}

export default new TaskService();
