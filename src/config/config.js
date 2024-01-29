import dotenv from "dotenv";

dotenv.config()
export default {
    PERSISTENCE: process.env.PERSISTENCE,
    PORT: process.env.PORT,
    MONGOURL: process.env.MONGOURL,
    DBNAME: process.env.DBNAME,
    PRIVATE_KEY: process.env.PRIVATE_KEY
}