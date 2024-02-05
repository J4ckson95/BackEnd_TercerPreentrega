import { cartsService, productService } from "./main.js";
export default class ticketRepository {
    constructor(dao) {
        this.dao = dao
    }
    #generarCodigoCompra() {
        const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let codigoCompra = '';
        for (let i = 0; i < 10; i++) {
            const caracterAleatorio = caracteres.charAt(Math.floor(Math.random() * caracteres.length));
            codigoCompra += caracterAleatorio;
        }
        return codigoCompra;
    }
    async generateTicket(cid, user) {
        try {
            let productsRefused = []
            let productsBought = []
            let amount = 0
            const cart = await cartsService.getCartById(cid)
            for (let product of cart.products) {
                const data = await productService.getProductById(product._id.toString())
                if (data.stock >= product.quantity) {
                    const diferent = Number(data.stock) - Number(product.quantity)
                    await productService.updateProduct(product._id.toString(), { stock: diferent })
                    productsBought.push(data)
                    amount += Number(data.price) * Number(product.quantity)
                }
                else productsRefused.push(data)
            }
            const newTicket = {
                code: this.#generarCodigoCompra(),
                purchase_datetime: new Date(),
                amount: amount,
                purchaser: user.email
            }
            const result = await this.dao.createTicket(newTicket)
            return {productsRefused, result}
        } catch (error) { console.error("Error en generateTicket:", error.message); }
    }
}