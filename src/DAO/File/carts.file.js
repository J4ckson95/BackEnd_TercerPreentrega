import fileManager from "./file.manager.js"
export default class carts extends fileManager {
    constructor(path = "./db.file.carts.json") {
        super(path)
    }
    async createCart(newProduct = { products: [] }) { return this.create(newProduct) }
    async getCartsById(cid) { return this.getById(cid) }
    async addProductToCart(cid, pid, quantity) {
        const data = await this.read()
        const indexCart = data.findIndex(element => element.id === parseInt(cid))
        const indexProduct = data[indexCart].products.findIndex(element => element.id === parseInt(pid))
        if (indexProduct === -1) data[indexCart].products.push({ id: parseInt(pid), quantity })
        else data[indexCart].products[indexProduct].quantity += quantity
        return this.write(data)
    }
    async deleteProductOfCart(cid, pid) {
        const data = await this.read()
        const indexCart = data.findIndex(element => element.id === parseInt(cid))
        if (indexCart !== -1) data[indexCart].products = data[indexCart].products.filter(element => element.id !== parseInt(pid))
        return this.write(data)
    }
    async delateCart(id) { return this.delete(id) }
}