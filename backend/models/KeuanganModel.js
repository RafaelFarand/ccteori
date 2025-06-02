import { DataTypes } from "sequelize";
import { pgDb } from "../config/database.js";

const Keuangan = pgDb.define("keuangan", {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  tanggal: { type: DataTypes.DATEONLY, allowNull: false },
  jenis: { type: DataTypes.ENUM("pemasukan", "pengeluaran"), allowNull: false },
  jumlah: { type: DataTypes.DECIMAL(15, 2), allowNull: false },
  keterangan: { type: DataTypes.TEXT, allowNull: true },
  kategori: { type: DataTypes.STRING(50), allowNull: true },
  user_id: { type: DataTypes.INTEGER, allowNull: false },
}, { 
  freezeTableName: true, 
  createdAt: false,
  updatedAt: false,
});

pgDb.sync().then(() => console.log("PostgreSQL: keuangan table synced"));
export default Keuangan;