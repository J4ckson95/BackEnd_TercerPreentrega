export default class cartRepository {
    constructor(dao) {
        this.dao = dao
    }
    async createCart() { return this.dao.createCart() }
    async getCartById(id) { return this.dao.getCartById(id) }
    async addProductToCart(cid, pid, quantity) {
        const cart = await this.dao.getCartById(cid)
        const indexProduct = cart.products.findIndex(element => element._id === pid)
        if (indexProduct === -1) cart.products.push({ _id: pid, quantity })
        else cart.products[indexProduct].quantity += quantity
        return await this.dao.updateCart(cid, cart)
    }
    async deleteProductsOfCart(cid) {
        const cart = await this.dao.getCartById(cid)
        cart.products = []
        return this.dao.updateCart(cid, cart)
    }
}