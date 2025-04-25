// routes/user.routes.ts
import { Router } from "express";
import { 
  createUser, 
  getUsers, 
  getUser, 
  updateUser, 
  deleteUser, 
  login
} from "../../controllers/userController";
import { 
  createUserValidator, 
  updateUserValidator, 
  checkValidationResult 
} from "../../validators/user.validator";
import { loginUserValidator } from "../../validators/login.userValidator";
import { authToken } from "../../middlewares/authToken";

const router = Router();

// Route pour créer un utilisateur
router.post(
  "/register", 
  createUserValidator, 
  checkValidationResult, 
  createUser
);

router.post("/login", loginUserValidator, login);
 
// Route pour récupérer tous les utilisateurs
router.get("/", getUsers);

// Route pour récupérer un utilisateur par son ID
router.get("/:id", getUser);

// Route pour mettre à jour un utilisateur par son ID
router.put(
  "/:id", 
  updateUserValidator, 
  checkValidationResult, 
  updateUser
);

// Route pour supprimer un utilisateur par son ID
router.delete("/:id", deleteUser);

export default router;
