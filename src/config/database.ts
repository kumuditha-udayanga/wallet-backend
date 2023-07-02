// @ts-ignore
import { Sequelize } from "sequelize";
import 'dotenv/config'

const db = new Sequelize(
    "wallet",
    "root",
    "root",
    {
      host: "localhost",
      dialect: "mysql"
    }
);

export default db;



