import { Router } from "express";
import { createCart, addProductToCart, getCartById, deleteProducts } from "../controllers/carts.controller.js";
import { cookieStractor, authUser } from "../middleware/middlewares.js"

const router = Router()

router.get("/:cid", cookieStractor, authUser(["user"]), getCartById)
router.post("/", createCart)
router.put("/:cid/product/:pid", addProductToCart)
router.delete("/:cid", deleteProducts)

router.get("/:cid/purchase", cookieStractor,)

export default router