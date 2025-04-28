import dotenv from "dotenv";
import express from "express";
import router from "./app";
import cors from "cors"; 
import path from "path";
import cookieParser from "cookie-parser"; 
import { checkOrigin } from "./middlewares/checkOrigin";


dotenv.config({ path: path.resolve(process.cwd(), "../.env") });
const app = express();
const PORT = process.env.BACK_PORT;

app.use(cookieParser());
app.use(
  cors({
    origin: process.env.FRONT_URL,
    credentials: true,
  })
);
/* app.use(checkOrigin);
 */app.use(express.json());
app.use(router);

if (process.env.NODE_ENV !== "test") {
  app.listen(PORT);
}
export default app;
