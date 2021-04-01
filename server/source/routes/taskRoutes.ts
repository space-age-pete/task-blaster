import {Router} from "express";
import taskController from "../controllers/taskController"

const router = Router();

// router.get("/getTasks", (req, res)=>{
// res.send("get . tasks")
// })

router.get("/getTasks", taskController.getTasks)

router.put("/toggleCompletion/:id", taskController.toggleTaskCompletion)

export default router;