import { Router } from "express";
import passport from "passport";
import { createUser, getUsers, getUserById, validateUser } from "../controllers/users.controller.js";


const router = Router()

router.post("/session", validateUser)
router.get("/", getUsers)
router.post("/", createUser)
router.get("/:id", getUserById)
router.get("/current/session", passport.authenticate("jwt", { session: false }),
    (req, res) => {
        const { user } = req.user
        res.send({ status: "Succes", payload: user })
    })

export default router