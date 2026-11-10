import { createContext, useState } from "react";

export const UserContext = createContext();

const API = "http://localhost:5000/api";

const UserProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token") || null);
  const [email, setEmail] = useState(localStorage.getItem("email") || null);

  const saveSession = (data) => {
    setToken(data.token);
    setEmail(data.email);
    localStorage.setItem("token", data.token);
    localStorage.setItem("email", data.email);
  };

  const auth = async (endpoint, email, password) => {
    const res = await fetch(`${API}/auth/${endpoint}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    const data = await res.json();
    if (!res.ok) throw new Error(data.error || "Error de autenticación");
    saveSession(data);
    return data;
  };

  const login = (email, password) => auth("login", email, password);
  const register = (email, password) => auth("register", email, password);

  const logout = () => {
    setToken(null);
    setEmail(null);
    localStorage.removeItem("token");
    localStorage.removeItem("email");
  };

  const getProfile = async () => {
    const res = await fetch(`${API}/auth/me`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    const data = await res.json();
    if (!res.ok) throw new Error(data.error || "No se pudo obtener el perfil");
    return data;
  };

  return (
    <UserContext.Provider
      value={{ token, email, login, register, logout, getProfile }}
    >
      {children}
    </UserContext.Provider>
  );
};
export default UserProvider;
