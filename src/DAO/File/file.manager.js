import fs from "fs"
export default class fileManager {
    constructor(path) {
        this.path = path
    }
    async write(data) {
        return fs.promises.writeFile(this.path, JSON.stringify(data, null, "\t"), "utf-8").catch(e => console.log(e.message))
    }
    async create(data) {
        const dataFromFile = await this.read() ?? []
        if (dataFromFile?.length === 0) data.id = 1
        else data.id = dataFromFile[dataFromFile.length - 1].id + 1
        dataFromFile.push(data)
        return this.write(dataFromFile)
    }
    async read() {
        return fs.promises.readFile(this.path, "utf-8")
            .then((response) => JSON.parse(response))
            .catch(e => console.log(e.message))
    }
    async update(id, newData) {
        const data = await this.read()
        const index = data.findIndex(element => element.id === parseInt(id))
        data[index] = { ...data[index], ...newData }
        return this.write(data)
    }
    async delete(id) {
        const data = await this.read()
        const newData = data.filter(element => element.id !== parseInt(id))
        return this.write(newData)
    }
    async getById(id) {
        const data = await this.read()
        return data.find(element => element.id === parseInt(id))
    }

}