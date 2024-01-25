import { Router } from "express";
import { createCart, addProductToCart, getCartById, deleteProducts } from "../controllers/carts.controller.js";

const router = Router()

router.get("/:cid", getCartById)
router.post("/", createCart)
router.put("/:cid/product/:pid", addProductToCart)
router.delete("/:cid", deleteProducts)

export default router