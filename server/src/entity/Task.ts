import { Field, Int, ObjectType } from "type-graphql";
import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Category } from "./Category";

@ObjectType()
@Entity()
export class Task extends BaseEntity {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  taskName: string;

  @Field()
  @Column({ default: false })
  completed: boolean;

  @Field(() => Int)
  @Column({ default: 5 })
  importance: number;

  @Field()
  @Column({ default: Date() })
  dateAdded: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  dateCompleted: string | null;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  deadline: string | null;

  @Field()
  @Column("text", { default: "" })
  notes: string;

  @Field(() => Int)
  @Column()
  category_id: number;

  @Field(() => Category)
  @ManyToOne(() => Category, (category) => category.tasks)
  @JoinColumn({ name: "category_id" })
  category: Category;
}
