import userModel from "./models/users.model.js";

export default class users {
    async createUser(user) { return userModel.create(user) }
    async getUserById(id) { return userModel.findById(id) }
    async updateUser(id, newData) { return userModel.updateOne({ _id: id }, { $set: newData }) }
}