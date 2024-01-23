import cartModel from "./models/carts.model.js";

export default class carts {
    async getCarts() { return cartModel.find().lean() }
    async createCart() { return cartModel.create() }
    async getCartsById(id) { return cartModel.find({ _id: id }).lean() }
    async changeProduct(id, newData) { return cartModel.updateOne({ _id: id }, { $set: newData }) }
    async deleteCart(id) { return cartModel.deleteOne({_id: id}) }
}