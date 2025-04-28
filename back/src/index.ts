import dotenv from "dotenv";
import express from "express";
import router from "./app";
import cors from "cors"; // Import du module cors pour
import path from "path";
import cookieParser from "cookie-parser"; // pour lire les cookies dans les requêtes


dotenv.config({ path: path.resolve(process.cwd(), "../.env") });
const app = express();
const PORT = process.env.BACK_PORT || 5000;

app.use(cookieParser());
// Ajouter les middlewares globaux
app.use(
  cors({
    origin: process.env.FRONT_URL,
    credentials: true,
  })
);
/* app.use(checkOrigin);
 */app.use(express.json());
app.use(router);
// Démarrer le serveur
if (process.env.NODE_ENV !== "test") {
  app.listen(PORT);
}
export default app;
