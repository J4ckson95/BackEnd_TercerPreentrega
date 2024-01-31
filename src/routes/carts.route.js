import { Router } from "express";
import { createCart, addProductToCart, getCartById, deleteProducts } from "../controllers/carts.controller.js";
import { cookieStractor } from "../middleware/coockie.middleware.js"

const router = Router()

router.get("/:cid", cookieStractor, getCartById)
router.post("/", createCart)
router.put("/:cid/product/:pid", addProductToCart)
router.delete("/:cid", deleteProducts)

export default router