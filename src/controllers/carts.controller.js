import { cartsService } from "../services/main.js"

export const createCart = async (req, res) => {
    const result = await cartsService.createCart()
    res.json({ status: "Success", payload: result })
}
export const addProductToCart = async (req, res) => {
    const { cid, pid } = req.params
    const { quantity } = req.query
    const result = await cartsService.addProductToCart(cid, pid, quantity)
    res.json({ status: "Success", payload: result })
}
export const getCartById = async (req, res) => {
    const { cid } = req.params
    const result = await cartsService.getCartById(cid)
    res.json({ status: "Success", payload: result })
}
export const deleteProducts = async (req, res) => {
    const { cid } = req.params
    const result = await cartsService.deleteProductsOfCart(cid)
    res.json({ status: "Success", payload: result })
}
