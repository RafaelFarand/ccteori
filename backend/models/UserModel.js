import { DataTypes } from "sequelize";
import { mysqlDb } from "../config/database.js";

const User = mysqlDb.define("user", {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  username: { type: DataTypes.STRING(50), allowNull: false, unique: true },
  email: { type: DataTypes.STRING(100), allowNull: false, unique: true },
  password: { type: DataTypes.STRING(255), allowNull: false },
  role: {
    type: DataTypes.ENUM("anggota", "bendahara"),
    allowNull: false,
    defaultValue: "anggota",
  },
  created_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
}, { freezeTableName: true, timestamps: false });

mysqlDb.sync().then(() => console.log("Database User table synchronized"));
export default User;