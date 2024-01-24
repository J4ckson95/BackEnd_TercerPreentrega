export default class usersRepository {
    constructor(dao) {
        this.dao = dao
    }
    async createUser(user) { return this.dao.createUser(user) }
    async getUsers() { return this.dao.getUsers() }
    async getUserById(id) { return this.dao.getUserById(id) }
    async updateUser(id, newData) { return this.dao.updateUser(id, newData) }
}