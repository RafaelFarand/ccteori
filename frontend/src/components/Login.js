// components/Login.js
import { useState } from "react";
import { useAuth } from "../context/AuthContext";

const Login = () => {
  const { login } = useAuth();
  const [username, setUsername] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    login({ username, role: username === "budi" ? "bendahara" : "anggota" });
  };

  return (
    <form onSubmit={handleLogin}>
      <h2>Login</h2>
      <input value={username} onChange={e => setUsername(e.target.value)} placeholder="Username" />
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
