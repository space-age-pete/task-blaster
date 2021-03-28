import express from "express";
import mongoose from "mongoose";

import apiRoutes from "./routes"

const app = express();
const PORT = 3001;

app.use(express.urlencoded({extended: true}))
app.use(express.json());

mongoose.connect("mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: true
})

app.use("/api", apiRoutes)

app.listen(PORT, ()=> {
  console.log(`App running on port http://localhost:${PORT}!`)
})