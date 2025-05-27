import Keuangan from "../models/KeuanganModel.js";

export const getKeuangan = async (req, res) => {
  try {
    const data = await Keuangan.findAll();
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const tambahSetoran = async (req, res) => {
  try {
    const { tanggal, jumlah, keterangan, kategori } = req.body;
    const userId = req.user.id;

    const data = await Keuangan.create({
      tanggal,
      jenis: "pemasukan",
      jumlah,
      keterangan,
      kategori,
      user_id: userId,
    });

    res.status(201).json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const tambahPengeluaran = async (req, res) => {
  try {
    const { tanggal, jumlah, keterangan, kategori } = req.body;
    const userId = req.user.id;

    const data = await Keuangan.create({
      tanggal,
      jenis: "pengeluaran",
      jumlah,
      keterangan,
      kategori,
      user_id: userId,
    });

    res.status(201).json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};