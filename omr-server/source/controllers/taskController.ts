import Task from "../models/Task";
import Category from "../models/Category"

import {Request, Response} from "express";

const getTasks = async (req: Request, res: Response) => {

  try {
    const dbTasks = await Task.find();

    console.log(dbTasks)
    
    res.json(dbTasks)

  } catch (err){
    res.status(500).json({message: "it broke i guess", err})
  }
}

const getOneTask = async (req: Request, res: Response) => {
  try {
    const dbTask = await Task.findById(req.params.id);

    if(!dbTask) return res.status(400).json({message: "couldn't find that one boss"})
    
    res.json(dbTask)
  } catch (err) {
    console.error(err);
    res.status(500).json({message: "it broke i guess", err})
  }
}

const addTask = async (req: Request, res: Response) => {
  try {
    const dbTask = await Task.create(req.body);
    
    
    res.json(dbTask)

  } catch (err){
    res.status(500).json({message: "it broke i guess", err})
  }
}

const toggleTaskCompletion = async (req:Request, res: Response)=>{
  try {
    const dbTask = await Task.findById(req.params.id);

    if(!dbTask) return res.status(400).json({message: "couldn't find that one boss"})

    if (!dbTask.completed){
      dbTask.completed = true;
      dbTask.dateCompleted = new Date();
    } else {
      dbTask.completed = false;
      dbTask.dateCompleted = undefined;
    }

    await dbTask.save();
    console.log(dbTask)
    res.json(dbTask)

  } catch (err) {
    res.status(500).json({message: "it broke i guess", err})
  }
}

export default {getTasks, getOneTask, addTask, toggleTaskCompletion};