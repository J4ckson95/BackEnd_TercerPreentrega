import { cartsService, productService } from "./main";
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
            const cart = await cartsService.getCartById(cid)
            for(let product of cart.products){
                
            }
        } catch (error) {

        }
    }
}