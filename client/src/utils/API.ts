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
  const data: {data: Task[]} = await axios.get("/api/tasks/getTasks")
  console.log("data", data)
  return data;
}

const toggleCompletion = async (id: string)=>{
  return axios.put("/api/tasks/toggleCompletion/" + id)
}

export default {getTasks, toggleCompletion}