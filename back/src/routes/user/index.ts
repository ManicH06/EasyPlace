// routes/user.routes.ts
import { Router } from "express";
import {
  createUser,
  getUsers,
  getUser,
  updateUser,
  deleteUser,
  login,
} from "../../controllers/userController";
import {
  createUserValidator,
  updateUserValidator,
  checkValidationResult,
} from "../../validators/user.validator";
import { loginUserValidator } from "../../validators/login.userValidator";
import { authToken, isAdmin } from "../../middlewares/authToken";

const router = Router();

router.post(
  "/register",
  createUserValidator,
  checkValidationResult,
  createUser
);

router.post("/login", loginUserValidator, login);

router.get("/", authToken, isAdmin, getUsers);

router.get("/:id", authToken, getUser);

router.put("/:id", updateUserValidator, checkValidationResult, updateUser);

router.delete("/:id", deleteUser);

export default router;
