import config from "../config/config.js"

export let products
export let carts
export let users

console.log(`Persistencia con ${config.PERSISTENCE}`);
switch (config.PERSISTENCE) {
    case "FILE":
        const { default: ProductsFile } = await import("./File/products.file.js")
        const { default: CartsFile } = await import("./File/carts.file.js")
        const { default: UsersFile } = await import("./File/users.file.js")
        products = ProductsFile
        carts = CartsFile
        users = UsersFile
        break;
    default:
        break;
}