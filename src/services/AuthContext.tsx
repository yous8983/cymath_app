import React, { createContext, useState, useEffect, useContext } from "react";

interface AuthContextType {
  isAuthenticated: boolean;
  login: (email: string, password: string) => boolean; // Correction du type de retour
  logout: () => void;
  register: (name: string, email: string, password: string) => boolean; // Correction du type de retour
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  const login = (email: string, password: string): boolean => {
    if (email && password) {
      localStorage.setItem("authToken", "fake-token-123");
      setIsAuthenticated(true);
      return true; // Retourne true
    }
    return false; // Retourne false
  };

  const logout = () => {
    localStorage.removeItem("authToken");
    setIsAuthenticated(false);
  };

  const register = (name: string, email: string, password: string): boolean => {
    if (name && email && password) {
      localStorage.setItem("authToken", "fake-token-456");
      setIsAuthenticated(true);
      return true; // Retourne true
    }
    return false; // Retourne false
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
