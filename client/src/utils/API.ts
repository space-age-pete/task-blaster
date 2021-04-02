import axios from "axios"

export interface Task {
  _id: string;
  text: string;
  completed: boolean;
  dateAdded: Date;
  dateCompleted?: Date;
  importance: number;
}

const getTasks = async ()=>{
  const data: {data: Task[]} = await axios.get("/api/tasks")
  console.log("data", data)
  return data;
}

const getOneTask = async (id: string)=>{
  const data: {data: Task} = await axios.get("/api/tasks/" + id)
  console.log("data", data)
  return data;
}

const addTask = (text: string)=>{
  return axios.post("/api/tasks", {text})
}

const toggleCompletion = (id: string)=>{
  return axios.put("/api/tasks/toggleCompletion/" + id)
}

export default {getTasks, getOneTask, addTask, toggleCompletion}