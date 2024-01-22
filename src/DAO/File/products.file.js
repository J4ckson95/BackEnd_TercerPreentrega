import fileManager from "./file.manager.js";
export default class products extends fileManager {
    constructor(path = "./db.products.json") {
        super(path)
    }
    async createProduct(product) { return this.create(product) }
    async getProducts() { return this.read() }
    async getProductById(id) { return this.getById(id) }
    async updateProduct(id, newData) { return this.update(id, newData) }
    async deleteProduct(id) { return this.delete(id) }
}