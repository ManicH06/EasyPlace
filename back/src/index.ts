import express from "express";
import router from "./app";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";

dotenv.config(); // Charger les variables d'environnement

const app = express();
const PORT = process.env.BACK_PORT || 5000;


app.use(cookieParser());
// Ajouter les middlewares globaux
app.use(cors({
  origin: process.env.FRONT_URL,
  credentials: true,
}));
app.use(express.json());
app.use(router);

// Démarrer le serveur
app.listen(PORT, () => {
  console.log(`Serveur démarré sur http://localhost:${PORT}`);
});
