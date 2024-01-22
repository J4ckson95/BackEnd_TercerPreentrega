import express from "express"
import productsRouter from "./routes/products.route.js"
import cartsRouter from "./routes/carts.route.js"
import userRouter from "./routes/users.route.js"
import config from "./config/config.js"

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use("/api/products", productsRouter)
app.use("/api/carts", cartsRouter)
app.use("/api/users", userRouter)

app.listen(config.PORT, () => console.log("Running Server ..."))