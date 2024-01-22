import cartModel from "./models/carts.model.js";

export default class carts {
    #update(pid, quantity) {

    }
    async createCart() { return cartModel.create() }
    async getCartsById(id) { return cartModel.find({ _id: id }).lean() }
    async addProductToCart(cid, pid, quantity) {
        const data = await cartModel.findById(cid).lean()

    }
}