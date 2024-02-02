import { Router } from "express";
import { getProducts, addProduct, getProductsById, updateProducts, deleteProduct } from "../controllers/products.controller.js";
import { cookieStractor, authUser } from "../middleware/middlewares.js";

const router = Router()
router.get("/", getProducts)
router.get("/:id", getProductsById)
router.post("/", cookieStractor, authUser(["admin"]), addProduct)
router.put("/:id", cookieStractor, authUser(["admin"]), updateProducts)
router.delete("/:id", cookieStractor, authUser(["admin"]), deleteProduct)


export default router