import { Router } from "express";
import shopRouter from "./routes/shop/index";
import userRouter from "./routes/user/index";
import productRouter from "./routes/product/index";
import errorHandler from "./middlewares/errorHandler";
import HTTPError from "./errors/HTTPError";
import sequelize, { connectToDB } from "./db/db";
import { Request, Response } from "express";

const router = Router();

// Route GET sur "/"
router.get("/", (req, res) => {
  res.send("Hello, bienvenue sur l’API !");
});

// Ajouter les routes
router.use("/shops", shopRouter);
router.use("/users", userRouter);
router.use("/products", productRouter);

router.get("/auth/status", (req: Request, res: Response) => {
  req.cookies.authToken
    ? res.json({ isAuthenticated: true })
    : res.json({ isAuthenticated: false });
});
// Gestion des routes non trouvées
router.use((_, __, next) => {
  next(new HTTPError(404, "Ressource introuvable"));
});

// Middleware de gestion des erreurs
router.use(errorHandler);

// Connecter à la base de données et synchroniser
(async () => {
  try {
    await connectToDB(); // Vérifier la connexion
    await sequelize.sync({ alter: true }); // Synchroniser les modèles avec la base de données
    console.log("Les modèles ont été synchronisés avec la base de données.");
  } catch (error) {
    console.error("Erreur lors de la connexion à la base de données :", error);
    process.exit(1); // Quitter l'application si la connexion échoue
  }
})();

export default router;
