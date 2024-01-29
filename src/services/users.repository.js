export default class usersRepository {
    constructor(dao) {
        this.dao = dao
    }
    async createUser(user) { return this.dao.createUser(user) }
    async findByEmail(email) { return this.dao.findByEmail(email) }
    async getUserById(id) { return this.dao.getUserById(id) }
    async updateUser(id, newData) { return this.dao.updateUser(id, newData) }
}