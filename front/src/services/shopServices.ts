import axiosInstance from "./axiosInstance";

interface formData {
  companyName: string;
  phone: string;
  street: string;
  postalCode: string;
  city: string;
  departement: string;
  siret: string;
  type: string;
  describe: string;
  category: string;
}

export const registerShop = async (formData: formData) => {
  try {
    const response = await axiosInstance.post("/shops/register", formData);
    return response.data; // Retourner les données en cas de succès
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) { 
    throw error.response?.data || { message: "Une erreur est survenue" }; // Gérer l'erreur
  }
};