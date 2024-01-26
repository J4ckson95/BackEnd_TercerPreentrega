import { userService } from "../services/main.js";

export const createUser = async (req, res) => {
    try {
        const user = req.body
        console.log(user);
        const result = await userService.createUser(user)
        res.json({ status: "Success", payload: result })
    } catch (error) { res.json({ status: "Error", message: error.message }) }
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