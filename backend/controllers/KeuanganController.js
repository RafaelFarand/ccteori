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

export const updateKeuangan = async (req, res) => {
  try {
    const { id } = req.params;
    const { tanggal, jenis, jumlah, keterangan, kategori } = req.body;

    // Check if keuangan exists
    const keuangan = await Keuangan.findByPk(id);
    if (!keuangan) {
      return res.status(404).json({ message: "Data keuangan tidak ditemukan" });
    }

    // Update the data
    const updatedData = await keuangan.update({
      tanggal,
      jenis,
      jumlah,
      keterangan,
      kategori,
    });

    res.json(updatedData);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};