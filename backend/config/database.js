import { Sequelize } from "sequelize";
import dotenv from "dotenv";
dotenv.config();

export const mysqlDb = new Sequelize(
  process.env.MYSQL_DB_NAME,
  process.env.MYSQL_USER,
  process.env.MYSQL_PASSWORD,
  {
    host: process.env.MYSQL_HOST,
    dialect: "mysql",
  }
);

export const pgDb = new Sequelize(
  process.env.PG_DB_NAME,
  process.env.PG_USER,
  process.env.PG_PASSWORD,
  {
    host: process.env.PG_HOST,
    dialect: "postgres",
  }
);