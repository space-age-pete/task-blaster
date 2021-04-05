import {Document, Schema, model} from "mongoose";

export interface ITask extends Document {
  text: string;
  completed: boolean;
  dateAdded: Date;
  dateCompleted?: Date;
  importance: number;
}

const TaskSchema: Schema = new Schema(
  {
    text: {
      type: String,
      required: true
    },
    completed: {
      type: Boolean,
      default: false
    },
    dateCompleted: Date,
    importance: {
      type: Number,
      default: 5
    }
  },
  {
      timestamps: true
  }
)

const Task = model<ITask>("Task", TaskSchema);

export default Task;