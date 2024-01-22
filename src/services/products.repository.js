export default class productsRepository {
    constructor(dao) {
        this.dao = dao
    }
    async getProducts() { return this.dao.getProducts() }
    async getProductsById(id) { return this.dao.getProductById(id) }
    async addProduct(product) { return this.dao.createProduct(product) }
    async updateProduct(id, newData) { return this.dao.updateProduct(id, newData) }
    async deleteProduct(id) { return this.dao.deleteProduct(id) }
}