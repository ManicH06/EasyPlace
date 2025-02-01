import axiosInstance from "./axiosInstance";

export const registerUser = async (email: string, password: string, name: string, roleId: number) => {
  try {
    const response = await axiosInstance.post("/users/register", {
      email,
      password,
      name,
      roleId
    });
    console.log(response);
    return response.data; // Retourner les données en cas de succès
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) { 
    throw error.response?.data || { message: "Une erreur est survenue" }; // Gérer l'erreur
  }
}; 

export const loginUser = async (email: string, password: string) => {
  try {
    const response = await axiosInstance.post("/users/login", {
      email,
      password,
    });
    return response.data; // Retourner les données en cas de succès
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) { 
    throw error.response?.data || { message: "Une erreur est survenue" }; // Gérer l'erreur
  }
};