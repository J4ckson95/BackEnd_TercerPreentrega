import express from "express"
import handlebars from "express-handlebars"
import cookieParser from "cookie-parser"
import passport from "passport"
import initializedPassport from "./config/passport.config.js"
import productsRouter from "./routes/products.route.js"
import cartsRouter from "./routes/carts.route.js"
import userRouter from "./routes/users.route.js"
import viewRouter from "./routes/view.route.js"
import config from "./config/config.js"
import __dirname from "./utils.js"

const app = express()
app.use(cookieParser())
app.use(express.json())
initializedPassport()
app.use(passport.initialize())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(__dirname + `/public`))
app.engine("handlebars", handlebars.engine())
app.set("views", __dirname + `/views`)
app.set("view engine", "handlebars")

app.use("/api/products", productsRouter)
app.use("/api/carts", cartsRouter)
app.use("/api/users", userRouter)

app.use("/librosalclic", viewRouter)



app.listen(config.PORT, () => console.log("Running Server ..."))