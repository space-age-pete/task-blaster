import Task from "../models/Task";
import {Request, Response} from "express";

const getTasks = async (req: Request, res: Response) => {
  
  // const data = {text: "jump around"}

  try {
    // const newTask = await Task.create(data)
    // console.log(newTask);
    
    const dbTasks = await Task.find();
    
    res.json(dbTasks)

  } catch (err){
    res.status(500).json({message: "it broke i guess", err})
  }
}

export default {getTasks};