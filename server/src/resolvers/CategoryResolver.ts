import { Arg, InputType, Int, Mutation, Query, Resolver } from "type-graphql";
import { Category } from "../entity/Category";

@Resolver()
export class CategoryResolver {
  @Query(() => [Category])
  async getCategories() {
    const categories = await Category.find();
    return categories;
  }

  @Mutation(() => Category)
  async createCategory(
    @Arg("categoryName")
    categoryName: string
  ) {
    // this does 2 SQL statements
    const category = await Category.create({ categoryName }).save();
    return category;
  }

  @Mutation(() => Boolean)
  async updateCategory(
    @Arg("id", () => Int)
    id: number,
    @Arg("categoryName")
    categoryName: string
  ) {
    const result = await Category.update({ id }, { categoryName });
    return result.affected === 1;
  }

  @Mutation(() => Boolean)
  async deleteCategory(
    @Arg("id", () => Int)
    id: number
  ) {
    const result = await Category.delete({ id });
    return result.affected === 1;
  }
}
