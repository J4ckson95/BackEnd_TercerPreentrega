import { Router } from "express";
import { createCart, addProductToCart, getCartById, deleteProduct, deleteCart } from "../controllers/carts.controller.js";

const router = Router()

router.get("/:cid", getCartById)
router.post("/", createCart)
router.put("/:cid/product/:pid", addProductToCart)
router.delete("/:cid/product/:pid", deleteProduct)
router.delete("/:cid", deleteCart)

export default router