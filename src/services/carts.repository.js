export default class cartRepository {
    constructor(dao) {
        this.dao = dao
    }
    async createCart() { return this.dao.createCart() }
    async getCartById(cid) { return this.dao.getCarts(cid) }
    async addProductToCart(cid, pid) {
        const cart = await this.dao.getCartById(cid)
        const indexProduct = cart.products.findIndex(element => element._id.toString() === pid)
        if (indexProduct === -1) cart.products.push({ _id: pid, quantity: 1 })
        else cart.products[indexProduct].quantity += 1
        return await this.dao.updateCart(cid, cart)
    }
    async deleteProductsOfCart(cid) {
        const cart = await this.dao.getCartById(cid)
        cart.products = []
        return this.dao.updateCart(cid, cart)
    }
}