import {Router} from "express";
import taskController from "../controllers/taskController"
import Task from "../models/Task";

const router = Router();

router.route("/").get(taskController.getTasks).post(taskController.addTask)

router.route("/:id").get(taskController.getOneTask)

router.put("/toggleCompletion/:id", taskController.toggleTaskCompletion)

export default router;