import cartModel from "./models/carts.model.js";

export default class carts {
    async getCarts(cid) {
        try {
            return cartModel.find({ _id: cid }).lean()
        } catch (error) { console.error("Error en getCarts:", error.message); }
    }
    async createCart() {
        try {
            return cartModel.create({})
        } catch (error) { console.error("Error en createCart:", error.message); }
    }
    async getCartById(id) {
        try {
            const cart = await cartModel.findById(id)
            if (!cart) throw new Error("Carrito no encontrado");
            return cart
        } catch (error) { console.error("Error en getCartById:", error.message); }
    }
    async updateCart(id, newData) {
        try {
            return cartModel.updateOne({ _id: id }, { $set: newData })
        } catch (error) { console.error("Error en updateCart:", error.message); }
    }
    async deleteCart(id) {
        try {
            return cartModel.deleteOne({ _id: id })
        } catch (error) { console.error("Error en deleteCart:", error.message); }
    }
}