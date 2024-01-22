import { Router } from "express";
import { getProducts, addProduct, getProductsById, updateProducts, deleteProduct } from "../controllers/products.controller.js";

const router = Router()
router.get("/", getProducts)
router.get("/:id", getProductsById)
router.post("/", addProduct)
router.put("/:id", updateProducts)
router.delete("/:id", deleteProduct)


export default router