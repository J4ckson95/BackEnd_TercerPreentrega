import { productService } from "../services/main.js"

export const getProducts = async (req, res) => {
    try {
        const data = await productService.getProducts()
        res.json({ status: "Success", payload: data })
    } catch (error) { res.json({ status: "Error", message: error.message }) }
}
export const addProduct = async (req, res) => {
    try {
        const newProduct = req.body
        const result = await productService.addProduct(newProduct)
        res.json({ status: "Success", payload: result })
    } catch (error) { res.json({ status: "Error", message: error.message }) }
}
export const getProductsById = async (req, res) => {
    try {
        const { id } = req.params
        const result = await productService.getProductById(id)
        res.json({ status: "Success2", payload: result })
    } catch (error) { res.json({ status: "Error", message: error.message }) }
}
export const updateProducts = async (req, res) => {
    try {
        const { id } = req.params
        const newData = req.body
        const result = await productService.updateProduct(id, newData)
        res.json({ status: "Success", payload: result })
    } catch (error) { res.json({ status: "Error", message: error.message }) }
}
export const deleteProduct = async (req, res) => {
    try {
        const { id } = req.params
        const result = await productService.deleteProduct(id)
        res.json({ status: "Success", payload: result })
    } catch (error) { res.json({ status: "Error", message: error.message }) }
}