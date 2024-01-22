import { Router } from "express";
import { createUser, getUsers, getUserById } from "../controllers/users.controller.js";

const router = Router()

router.get("/", getUsers)
router.post("/", createUser)
router.get("/:id", getUserById)

export default router