import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import Login from "./components/Login";
import Register from "./components/Register";
import KeuanganForm from "./components/KeuanganForm";
import ProtectedRoute from "./components/ProtectedRoute";

const App = () => {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          
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
              <div>
                <h2>Selamat datang di Aplikasi Keuangan</h2>
                <p>Silakan pilih menu di atas</p>
              </div>
            </ProtectedRoute>
          } />
        </Routes>
      </AuthProvider>
    </Router>
  );
};

export default App;
