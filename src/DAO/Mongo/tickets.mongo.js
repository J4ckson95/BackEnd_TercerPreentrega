import ticketModel from "./models/ticket.model.js";
export default class ticket {
    async createTicket(data) { return await ticketModel.create(data) }
}