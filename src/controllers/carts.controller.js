import { cartsService } from "../services/main.js"
import { ticketServices } from "../services/main.js"

export const createCart = async (req, res) => {
    const result = await cartsService.createCart()
    res.json({ status: "Success", payload: result })
}
export const addProductToCart = async (req, res) => {
    const { cid, pid } = req.params
    const result = await cartsService.addProductToCart(cid, pid)
    res.json({ status: "Success", payload: result })
}
export const getCartById = async (req, res) => {
    const { user } = req.user
    const { cid } = req.params
    const result = await cartsService.getCartById(cid)
    res.render("cart", { result, user })
}
export const deleteProducts = async (req, res) => {
    const { cid } = req.params
    const result = await cartsService.deleteProductsOfCart(cid)
    res.json({ status: "Success", payload: result })
}
export const generateTicket = async (req, res) => {
    const { cid } = req.params
    const { user } = req.user
    const { productsRefused, result } = await ticketServices.generateTicket(cid, user)
    res.send({ status: "Succes", productsRefused })
}
