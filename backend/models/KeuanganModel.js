import { DataTypes } from "sequelize";
import { pgDb } from "../config/database.js";

const Keuangan = pgDb.define("keuangan", {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  jenis: { type: DataTypes.ENUM("pemasukan", "pengeluaran"), allowNull: false },
  jumlah: { type: DataTypes.DECIMAL(15, 2), allowNull: false },
  keterangan: { type: DataTypes.TEXT, allowNull: true },
}, { 
  freezeTableName: true, 
  createdAt: "tanggal_dibuat",
  updatedAt: "tanggal_diupdate",
});

pgDb.sync().then(() => console.log("PostgreSQL: keuangan table synced"));
export default Keuangan;