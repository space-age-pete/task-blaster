import Task from "../models/Task";
import Category from "../models/Category"
import {Request, Response} from "express";

export default {
  async addCategory(req: Request, res: Response){
    try {
      const dbCategory = await Category.create(req.body)

      dbCategory.subcategories.push({name: "main"})
      await dbCategory.save();

      res.json(dbCategory)
    } catch (err) {
      res.json(err)
    }
 
  },
}