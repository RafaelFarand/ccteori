import { createContext, useContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [authError, setAuthError] = useState(null);

  const login = ({ username, role }) => {
    setUser({ username, role });
  };

  const register = async (email, username, password) => {
    // Simulasi register
    if (!email || !username || !password) {
      setAuthError("Field tidak boleh kosong");
      return false;
    }
    setAuthError(null);
    return true;
  };

  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, register, logout, authError }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
