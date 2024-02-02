import { products, carts, users, tickets } from "../DAO/factory.js"
import productsRepository from "./products.repository.js"
import cartRepository from "./carts.repository.js"
import usersRepository from "./users.repository.js"
import ticketRepository from "./ticket.repository.js"

export const productService = new productsRepository(new products())
export const cartsService = new cartRepository(new carts())
export const userService = new usersRepository(new users())
export const ticketServices = new ticketRepository(new tickets())