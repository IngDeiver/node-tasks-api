/* eslint-disable class-methods-use-this */
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
   *
   * @param {ITask} task - The task to create
   * @return {Promise<ITask>}  A task created
   * @memberof TaskService
   */
  async create(task: ITask): Promise<ITask> {
    return TaskRepository.create(task);
  }

  /**
   *
   *
   * @return {Promise<Array<ITask>>}  A list of tasks
   * @memberof TaskService
   */
  async list(): Promise<Array<ITask>> {
    return TaskRepository.list();
  }

  /**
   *
   *
   * @param {string} id - The id to find
   * @return {Promise<ITask>}  A task
   * @memberof TaskService
   */
  async getById(id: string): Promise<ITask | null> {
    return TaskRepository.getById(id);
  }

  /**
   *
   *
   * @param {ITask} task - The task to remove
   * @return {Promise<ITask>}  A task removed
   * @memberof TaskService
   */
  async remove(task: ITask): Promise<ITask> {
    return TaskRepository.remove(task);
  }

  /**
   *
   *
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
   *
   * @param {ITask} task - The task to updated
   * @return {Promise<ITask>}  A task updated
   * @memberof TaskService
   */
  async update(task: ITask): Promise<ITask> {
    return TaskRepository.update(task);
  }

  /**
   *
   *
   * @param {string} id - The id to find
   * @param {ITask} task - The task to updated
   * @return {Promise<ITask>} A task updated
   * @memberof TaskService
   */
  async updateById(id: string, task: ITask): Promise<ITask | null > {
    const taskToUpdate = await this.getById(id);
    if (taskToUpdate) {
      taskToUpdate.title = task.title;
      await taskToUpdate.update();
    }
    return taskToUpdate;
  }
}

export default new TaskService();
