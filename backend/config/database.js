import { Sequelize } from "sequelize";

export const mysqlDb = new Sequelize("uangsql", "root", "bebas", {
  host: "34.173.12.88",
  dialect: "mysql",
});

export const pgDb = new Sequelize("uangpg", "postgres", "bebas", {
  host: "34.27.32.116",
  dialect: "postgres",
}); 