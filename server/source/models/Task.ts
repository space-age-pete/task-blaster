import {Document, Schema, model} from "mongoose";

interface ITask extends Document {
  text: string;
  completed: boolean;
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
    }
  },
  {
      timestamps: true
  }
)

const Task = model<ITask>("Task", TaskSchema);

export default Task;