import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from "react-router-dom";
import { AuthProvider, useAuth } from "./context/AuthContext";
import Login from "./components/Login";
import Register from "./components/Register";
import KeuanganForm from "./components/KeuanganForm";
import KeuanganSummary from "./components/KeuanganSummary";
import ProtectedRoute from "./components/ProtectedRoute";

const HomeMenu = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  return (
    <div>
      <h2>Selamat datang di Aplikasi Keuangan</h2>
      <KeuanganSummary />
      {user?.role === "anggota" && (
        <button
          style={{ marginTop: 20, padding: "10px 20px", fontSize: 16 }}
          onClick={() => navigate("/setoran")}
        >
          Setor Iuran
        </button>
      )}
      {user?.role === "bendahara" && (
        <div style={{ marginTop: 20 }}>
          <button
            style={{ marginRight: 10, padding: "10px 20px", fontSize: 16 }}
            onClick={() => navigate("/pemasukan")}
          >
            Tambah Pemasukan
          </button>
          <button
            style={{ padding: "10px 20px", fontSize: 16 }}
            onClick={() => navigate("/pengeluaran")}
          >
            Tambah Pengeluaran
          </button>
        </div>
      )}
      <p style={{ marginTop: 30 }}>Silakan pilih menu di atas</p>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          <Route path="/setoran" element={
            <ProtectedRoute role="anggota">
              <KeuanganForm jenis="pemasukan" />
            </ProtectedRoute>
          } />

          <Route path="/pemasukan" element={
            <ProtectedRoute role="bendahara">
              <KeuanganForm jenis="pemasukan" />
            </ProtectedRoute>
          } />

          <Route path="/pengeluaran" element={
            <ProtectedRoute role="bendahara">
              <KeuanganForm jenis="pengeluaran" />
            </ProtectedRoute>
          } />

          <Route path="/" element={
            <ProtectedRoute>
              <HomeMenu />
            </ProtectedRoute>
          } />
        </Routes>
      </AuthProvider>
    </Router>
  );
};

export default App;
