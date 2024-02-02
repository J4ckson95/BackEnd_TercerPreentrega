import { validateToken } from "../utils.js"
export const cookieStractor = (req, res, next) => {
    const token = (req?.cookies) ? req.cookies["authToken"] : null
    if (token) {
        const data = validateToken(token)
        req.user = data
        return next()
    }
}
export const authUser = (roles) => {
    return (req, res, next) => {
        const { user } = req.user
        if (roles.includes(user.rol)) return next()
        res.status(400).send("Usuario no autorizado")
    }
}