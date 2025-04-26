import { Router, Request, Response } from "express";
import shopUploader from "../../middlewares/shopUploader";
import withTryCatch from "../../decorators/MWErrorDecorator";
import {
  getAllShops,
  getShop,
  createShop,
  getRandomShops,
} from "../../controllers/shopController";
import { authToken } from "../../middlewares/authToken";

const router = Router();

// Route pour uploader des fichiers
router.post("/upload", withTryCatch(shopUploader), (req: Request, res: Response) => {
  res.send(`Fichiers envoyés avec succès !, le texte est : ${req.body.text}`);
});

router.post("/register", withTryCatch(createShop));

// Route pour récupérer tous les shops
router.get("/", withTryCatch(getAllShops)); 
router.get("/promoteshops", withTryCatch(getRandomShops));
router.get("/:id", getShop);

export default router;
