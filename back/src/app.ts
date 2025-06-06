import { apiKeyAuth } from "./middlewares/apiKeyAuth";
import { Router } from "express";
import shopRouter from "./routes/shop/index";
import userRouter from "./routes/user/index";
import productRouter from "./routes/product/index";
import errorHandler from "./middlewares/errorHandler";
import HTTPError from "./errors/HTTPError";
import sequelize from "./db/db";
import { connectToDB } from "./db/db";
import { Request, Response } from "express";

const router = Router();

router.use("/shops", apiKeyAuth, shopRouter);
router.use("/users", userRouter);
router.use("/products", apiKeyAuth, productRouter);

router.get("/auth/status", apiKeyAuth, (req: Request, res: Response) => {
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

(async () => {
  try {
    await connectToDB();
    await sequelize.sync({ alter: true });
    console.log("Les modèles ont été synchronisés avec la base de données.");
  } catch (error) {
    console.error("Erreur lors de la connexion à la base de données :", error);
    process.exit(1);
  }
})();
export default router;
