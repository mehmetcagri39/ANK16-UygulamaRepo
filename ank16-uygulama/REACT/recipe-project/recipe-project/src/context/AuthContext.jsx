import { createContext, useState, useEffect } from "react";
import AuthService from "../services/AuthService";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      setAuthenticated(true);
    }
  }, []);

  const login = async (username, password) => {
    try {
      const response = await AuthService.login(username, password);
      if (response.access_token) {
        localStorage.setItem("user", JSON.stringify(response));
        setAuthenticated(true);
      }
    } catch (error) {
      setAuthenticated(false);
      throw new Error(error);
    }
  };

  const logout = () => {
    AuthService.logout();
    localStorage.removeItem("user");
    setAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ login, logout, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
