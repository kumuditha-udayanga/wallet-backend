import { Sequelize } from 'sequelize';
import dotenv from"dotenv";
dotenv.config();

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



