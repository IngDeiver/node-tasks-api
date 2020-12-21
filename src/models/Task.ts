import mongoose, { Model, Schema } from 'mongoose';
import { ITask } from '../interfaces';

const TaskSchema: Schema<ITask> = new Schema({
  title: { type: String, required: true },
});

const Task: Model<ITask> = mongoose.model('Task', TaskSchema);
export default Task;
