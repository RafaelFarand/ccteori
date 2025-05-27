// components/KeuanganForm.js
import { useState } from "react";
import { useAuth } from "../context/AuthContext";

const KeuanganForm = ({ jenis }) => {
  const { user } = useAuth();
  const [form, setForm] = useState({ tanggal: "", jumlah: "", keterangan: "", kategori: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch(`/api/keuangan/${jenis === "pemasukan" ? "setoran" : "pengeluaran"}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    const data = await res.json();
    alert(`Berhasil disimpan: ${JSON.stringify(data)}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>{jenis === "pemasukan" ? "Tambah Setoran" : "Tambah Pengeluaran"}</h3>
      <input name="tanggal" type="date" onChange={handleChange} required />
      <input name="jumlah" type="number" placeholder="Jumlah" onChange={handleChange} required />
      <input name="kategori" placeholder="Kategori" onChange={handleChange} />
      <textarea name="keterangan" placeholder="Keterangan" onChange={handleChange}></textarea>
      <button type="submit">Simpan</button>
    </form>
  );
};

export default KeuanganForm;
