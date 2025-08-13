import axios from "axios";

// Remplacez cette URL par l'URL de votre API backend
const API_URL = "https://votre-api.com/api/auth";

export const login = async (email: string, password: string) => {
  try {
    const response = await axios.post(`${API_URL}/login`, { email, password });
    // Stockage du token dans le localStorage pour persister la session
    localStorage.setItem("authToken", response.data.token);
    return response.data;
  } catch (error) {
    console.error("Erreur de connexion:", error);
    throw error;
  }
};

export const register = async (
  name: string,
  email: string,
  password: string
) => {
  try {
    const response = await axios.post(`${API_URL}/register`, {
      name,
      email,
      password,
    });
    // Stockage du token après l'inscription si votre API le renvoie
    localStorage.setItem("authToken", response.data.token);
    return response.data;
  } catch (error) {
    console.error("Erreur d'inscription:", error);
    throw error;
  }
};

export const logout = () => {
  // Suppression du token pour déconnecter l'utilisateur
  localStorage.removeItem("authToken");
};

export const getCurrentUser = () => {
  // Récupération du token pour vérifier si l'utilisateur est connecté
  return localStorage.getItem("authToken");
};
