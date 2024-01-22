export default class cartRepository {
    constructor(dao) {
        this.dao = dao
    }
    async createCart() { return this.dao.createCart() }
    async getCartById(id) { return this.dao.getCartsById(id) }
    async addProductToCart(cid, pid, quantity) { return this.dao.addProductToCart(cid, pid, quantity) }
    async deleteProductOfCart(cid, pid) { return this.dao.deleteProductOfCart(cid, pid) }
    async deleteCart(id) { return this.dao.delateCart() }
}