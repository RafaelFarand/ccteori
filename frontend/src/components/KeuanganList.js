// components/KeuanganList.js
import { useEffect, useState } from "react";

const KeuanganList = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    fetch("/api/keuangan")
      .then(res => res.json())
      .then(setList);
  }, []);

  return (
    <div>
      <h2>Data Keuangan</h2>
      <ul>
        {list.map(item => (
          <li key={item.id}>
            {item.tanggal} - {item.jenis} - Rp{item.jumlah} - {item.keterangan}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default KeuanganList;
