import {Router} from "express";
import categoryController from "../controllers/categoryController"

const router = Router();

router.route("/").post(categoryController.addCategory)

export default router;