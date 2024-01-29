import { userService, cartsService } from "../services/main.js";
import { generateHas, validateHas, generateToken } from "../utils.js";

export const createUser = async (req, res) => {
    try {
        const { email, password, ...rest } = req.body
        const user = await userService.findByEmail(email)
        if (user) {
            console.log("Error email ya registrado, PENDIENTE DE ARREGLAR");
            return res.redirect("/librosalclic/session/login")
        }
        const newCart = await cartsService.createCart()
        const newUser = { email, password: generateHas(password), cartId: newCart._id, ...rest }
        await userService.createUser(newUser)
        res.redirect("/librosalclic/session/login")
    } catch (error) { res.json({ status: "Error1", message: error.message }) }
}
export const validateUser = async (req, res) => {
    const { email, password } = req.body
    const user = await userService.findByEmail(email)
    if (!user) return res.redirect("/librosalclic/session/register")
    if (!validateHas(user, password)) return res.json({ status: "Error", message: "Contraseña incorrecta" })
    const token = generateToken(user)
    res.cookie("authToken", token).redirect("/api/products/")
}
export const getUsers = async (req, res) => {
    try {
        const data = await userService.getUsers()
        res.json({ status: "Success", payload: data })
    } catch (error) { res.json({ status: "Error", message: error.message }) }
}
export const getUserById = async (req, res) => {
    try {
        const { id } = req.params
        const result = await userService.getUserById(id)
        res.json({ status: "Success", payload: result })
    } catch (error) { res.json({ status: "Error", message: error.message }) }
}