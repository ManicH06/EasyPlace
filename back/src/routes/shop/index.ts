import { Router } from "express";
import shopUploader from "../../middlewares/shopUploader";
import withTryCatch from "../../decorators/MWErrorDecorator";
import { getAllShops, getShop, createShop } from "../../controllers/shopController";
import { authToken } from "../../middlewares/authToken";

const router = Router();


// Route pour uploader des fichiers
router.post("/upload", withTryCatch(shopUploader), (req, res) => {
  res.send(`Fichiers envoyés avec succès !, le texte est : ${req.body.text}`);
});

router.post("/register", authToken, withTryCatch(createShop));

// Route pour récupérer tous les shops
router.get("/",withTryCatch(getAllShops));
router.get("/:id", getShop);

export default router;