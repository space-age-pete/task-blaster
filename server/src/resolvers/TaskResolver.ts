import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { Task } from "../entity/Task";

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
    @Arg("taskName")
    taskName: string
  ) {
    const task = await Task.create({ taskName, category_id: 1 }).save();
    return task;
  }
}
