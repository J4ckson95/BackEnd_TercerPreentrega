import { validateToken } from "../utils.js"
export const cookieStractor = (req, res, next) => {
    const token = (req?.cookies) ? req.cookies["authToken"] : null
    if (token) {
        const data = validateToken(token)
        req.user = data
        return next()
    }
}