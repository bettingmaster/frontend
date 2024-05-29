import { createContext, useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const user = JSON.parse(atob(token.split(".")[1]));
      setUser(user);
    }
  }, []);

  const register = async (username, password) => {
    await axios.post("/api/register", { username, password });
    await login(username, password);
  };

  const login = async (username, password) => {
    const { data } = await axios.post("/api/login", { username, password });
    localStorage.setItem("token", data.token);
    const user = JSON.parse(atob(data.token.split(".")[1]));
    setUser(user);
    router.push("/");
  };

  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
    router.push("/login");
  };

  return (
    <AuthContext.Provider value={{ user, register, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
