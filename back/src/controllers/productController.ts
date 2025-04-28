import { Request, Response } from "express";
import models from "../../models";
const { Product } = models; 

// Récupérer tous les produits
export const getAllProducts = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const products = await Product.findAll({
      include: [
        /*  { association: "user" }, // Inclut l'utilisateur associé
         */ { association: "shop" }, // Inclut le shop associé
      ],
    });
    res.status(200).json(products);
  } catch (error) {
    console.error("Error in getAllProducts:", error);
    if (!res.headersSent) {
      res.status(500).json({
        error: "Erreur lors de la récupération des produits",
        deatils: error,
      });
    }
    return;
  }
};

// Récupérer un produit par son id
export const getProduct = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params;
    const product = await Product.findByPk(id, {
      include: [{ association: "shop" }], // Inclut le shop associé
    });
    if (product) {
      res.status(200).json(product);
    } else {
      res.status(404).json({ error: "Produit non trouvé" });
      return;
    }
  } catch (error) {
    console.error("Error in getProduct:", error);
    res.status(500).json({
      error: "Erreur lors de la récupération du produit",
      details: error,
    });
    return;
  }
};
