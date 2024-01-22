import { products, carts, users } from "../DAO/factory.js"
import productsRepository from "./products.repository.js"
import cartRepository from "./carts.repository.js"
import usersRepository from "./users.repository.js"

export const productService = new productsRepository(new products())
export const cartsService = new cartRepository(new carts())
export const userService = new usersRepository(new users())