import { Router } from "express";

const router = Router()
router.get("/session/register", (req, res) => res.render("register"))
router.get("/session/login", (req, res) => res.render("login"))

export default router