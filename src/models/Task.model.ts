import mongoose, { Model, Schema } from 'mongoose';
import { ITask } from '../interfaces';

/** @type {Task} */
const TaskSchema: Schema<ITask> = new Schema({
  title: { type: String, required: true },
});

const Task: Model<ITask> = mongoose.model('Task', TaskSchema);
export default Task;
