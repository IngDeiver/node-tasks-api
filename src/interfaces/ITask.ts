import { Document } from 'mongoose';

interface ITask extends Document{
    title: { type: String, required: true }
}
export default ITask;
