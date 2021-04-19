import express from "express";
import mongoose from "mongoose";

import apiRoutes from "./routes"

const app = express();
const PORT = 3001;

app.use(express.urlencoded({extended: true}))
app.use(express.json());

mongoose.connect("mongodb://localhost/task-blaster", {
  useNewUrlParser: true,
  useFindAndModify: true
})

app.use("/api", apiRoutes)

app.get("/test", (req, res)=> {
  console.log("test was hit")
  res.json({message: "test passed"})
})

app.listen(PORT, ()=> {
  console.log(`App running on port http://localhost:${PORT}!`)
})