import axios from "axios";

export async function getAuthStatus(): Promise<boolean> {
  try {
    const response = await axios.get(`${process.env.API_URL}/auth/status`, {
      withCredentials: true,
      headers: {
        "x-api-key": process.env.API_KEY,
      },
    });
    return response.data.isAuthenticated;
  } catch (error) {
    console.error(
      "Erreur lors de la vérification de l'authentification :",
      error
    );
    return false;
  }
}