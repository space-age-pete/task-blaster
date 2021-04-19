import { Field, Int, ObjectType } from "type-graphql";
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@ObjectType()
@Entity()
export class Step extends BaseEntity {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  text: string;

  @Field()
  @Column({ default: Date() })
  dateAdded: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  dateCompleted: string | null;
}
