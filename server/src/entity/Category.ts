import { Field, Int, ObjectType } from "type-graphql";
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  OneToMany,
} from "typeorm";
import { Task } from "./Task";

@ObjectType()
@Entity()
export class Category extends BaseEntity {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column("varchar", { unique: true })
  // should this be snake_case or camelCase?
  categoryName: string;

  @Field(() => [Task])
  @OneToMany(() => Task, (task) => task.category)
  tasks: Task[];
}
