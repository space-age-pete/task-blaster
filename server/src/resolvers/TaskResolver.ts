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

  @Mutation(() => Task)
  async createTask(
    @Arg("newTaskData", () => TaskInput)
    newTaskData: TaskInput
  ) {
    console.log("TRYNA CREATE A TASK HERE OH");
    const task = await Task.create(newTaskData).save();
    return task;
  }
}
