import {
  Arg,
  Field,
  InputType,
  Int,
  Mutation,
  Query,
  Resolver,
} from "type-graphql";
import { Task } from "../entity/Task";

@InputType()
class TaskInput {
  @Field()
  taskName: string;

  @Field(() => Int)
  category_id: number;
}

@Resolver()
export class TaskResolver {
  @Query(() => [Task])
  async getTasks() {
    const tasks = await Task.find({ relations: ["category"] });
    console.log(tasks);
    return tasks;
  }

  @Query(() => Task, { nullable: true })
  async getTask(
    @Arg("id", () => Int)
    id: number
  ): Promise<Task | undefined> {
    // maybe should be Promise<Task | null> ?
    const task = await Task.findOne({ id }, { relations: ["category"] });
    console.log(task);
    return task;
  }

  @Mutation(() => Task)
  async createTask(
    @Arg("newTaskData", () => TaskInput)
    newTaskData: TaskInput
  ) {
    console.log("TRYNA CREATE A TASK HERE OH");
    const task = await Task.create(newTaskData).save();
    return task;
  }

  @Mutation(() => Int)
  async toggleCompletion(
    @Arg("id", () => Int)
    id: number
  ) {
    const task = await Task.findOne({ id }, { relations: ["category"] });
    console.log(task);

    if (task.completed) {
      task.completed = false;
      task.dateCompleted = null;
    } else {
      task.completed = true;
      task.dateCompleted = Date();
    }

    await task.save();

    return task.id;
  }
}
