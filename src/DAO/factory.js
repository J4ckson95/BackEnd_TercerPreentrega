import config from "../config/config.js"
import mongoose from "mongoose"


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
    case "MONGO":
        await mongoose.connect(config.MONGOURL, { dbName: config.DBNAME }).then(() => console.log("DataBase Connected"))
        const { default: ProductsMongo } = await import("./Mongo/products.mongo.js")
        const { default: CartsMongo } = await import("./Mongo/carts.mongo.js")
        const { default: UsersMongo } = await import("./Mongo/users.mongo.js")
        products = ProductsMongo
        carts = CartsMongo
        users = UsersMongo
        break
    default:
        throw new Error('Persistence not recognized')
}