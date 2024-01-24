export default class cartRepository {
    constructor(dao) {
        this.dao = dao
    }
    async createCart() { return this.dao.createCart() }
    async getCartById(id) { return this.dao.getCartsById(id) }
    async addProductToCart(cid, pid, quantity) {
        const cart = await this.dao.getCartById(cid)
        const indexProduct = cart.products.findIndex(element => element._id.toString() === pid)
        if (indexProduct === -1) cart.products.push({ _id: pid, quantity })
        else cart.products[indexProduct].quantity += quantity
        return await this.dao.updateCart(cid, cart)
    }
    async deleteProductsOfCart(cid, pid) {
        const cart = await this.dao.getCartById(cid)
        const newCart = cart.products.filter(element => element._id !== pid)
        return this.dao.updateCart(cid, newCart)
    }
    async deleteCart(id) { return this.dao.delateCart() }
}