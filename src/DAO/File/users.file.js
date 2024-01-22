import fileManager from "./file.manager.js";
export default class users extends fileManager {
    constructor(path = "./db.file.users.json") {
        super(path)
    }
    async createUser (user){return this.create(user)}
    async getUsers() { return this.read() }
    async getUserById(id) { return this.getById(id) }
}