import { Document } from 'mongoose';

/**
 *
 * Type for managament tasks
 * @interface ITask
 * @extends {Document}
 * @param {string} title - title of task
 */
interface ITask extends Document{
    title: { type: String, required: true }
}
export default ITask;
