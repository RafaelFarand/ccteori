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
    const { tanggal, jumlah, keterangan, kategori, user_id } = req.body;
    const data = await Keuangan.create({
      tanggal,
      jenis: "pemasukan",
      jumlah,
      keterangan,
      kategori: "iuran",
      user_id: user_id || 0,
    });
    res.status(201).json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const tambahPengeluaran = async (req, res) => {
  try {
    const { tanggal, jumlah, keterangan, kategori, user_id } = req.body;
    const data = await Keuangan.create({
      tanggal,
      jenis: "pengeluaran",
      jumlah,
      keterangan,
      kategori,
      user_id: user_id || 0,
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
    const keuangan = await Keuangan.findByPk(id);
    if (!keuangan) {
      return res.status(404).json({ message: "Data keuangan tidak ditemukan" });
    }
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

export const getSummary = async (req, res) => {
  try {
    const pemasukan = await Keuangan.sum("jumlah", { where: { jenis: "pemasukan" } }) || 0;
    const pengeluaran = await Keuangan.sum("jumlah", { where: { jenis: "pengeluaran" } }) || 0;
    res.json({
      pemasukan,
      pengeluaran,
      saldo: pemasukan - pengeluaran,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};