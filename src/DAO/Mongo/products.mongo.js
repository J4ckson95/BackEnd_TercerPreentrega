import productModel from "./models/products.model.js";

export default class products {
    async getProducts() { return productModel.find() }
    async getProductById(id) { return productModel.findById(id) }
    async createProduct(product) { return productModel.create(product) }
    async updateProduct(id, newData) { return productModel.updateOne({ _id: id }, {$set:newData}) }
    async deleteProduct(id) { return productModel.deleteOne({ _id: id }) }
}