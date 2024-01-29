import userModel from "./models/users.model.js";

export default class users {
    async createUser(user) { return userModel.create(user) }
    async findByEmail(email) {
        try {
            return userModel.findOne({ email: email })
        } catch (error) { console.error("Error en findByEmail:", error.message); }
    }
    async getUserById(id) { return userModel.findById(id) }
    async updateUser(id, newData) { return userModel.updateOne({ _id: id }, { $set: newData }) }
}