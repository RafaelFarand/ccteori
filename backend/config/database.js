import { Sequelize } from "sequelize";

export const mysqlDb = new Sequelize("uangsql", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

export const pgDb = new Sequelize("uangpg", "postgres", "Almeralan140904*", {
  host: "localhost",
  dialect: "postgres",
}); 