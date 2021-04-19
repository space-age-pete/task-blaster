import {Document, Schema, model, Types} from "mongoose";
import {ITask} from "./Task"

interface ISubcategory extends Document{
  name: string;
  tasks: Array<ITask["_id"]>
}

const SubcategorySchema: Schema = new Schema (
  {
    name: {
      type: String,
      required: true
    },
    tasks: [{
      type: Schema.Types.ObjectId,
      ref: "Task"
    }]
  }
)

interface ICategory extends Document{
  name: string;
  subcategories: Types.DocumentArray<ISubcategory>;
}

const CategorySchema: Schema = new Schema (
  {
    name: {
      type: String,
      required: true
    },
    subcategories: [SubcategorySchema]
  }
)

// CategorySchema.post<ICategory>("save", function(){
//   console.log("this", this)

  // this.subcategories.push({name: "main"})
  // this.save();
// })

const Category = model<ICategory>("Category", CategorySchema)

export default Category