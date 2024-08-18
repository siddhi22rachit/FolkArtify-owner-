import express,{Router} from "express";
import { register } from "../controllers/auth.controller.js";

const router=express.Router()

router.post("/register",register);
router.post("/login");

export default router;