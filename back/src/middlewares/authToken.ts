import jwt, { JwtPayload } from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";

interface DecodedToken extends JwtPayload {
  id: number;
  email?: string;
  roleId?: number;
}

export const authToken = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const token = req.cookies.authToken;
  if (!token) {
    res.sendStatus(401);
    return;
  }
  const secret = process.env.JWT_SECRET;
  if (!secret) {
    res.sendStatus(500);
    return;
  }

  try {
    const decoded = jwt.verify(token, secret) as DecodedToken;
    req.user = decoded;
  } catch (err) {
    console.error("JWT Verification Error:", err);
    res.sendStatus(403);
    return;
  }
};

export const isAdmin = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const user = req.user as DecodedToken | undefined;
  if (user && user.roleId === 1) {
    next();
  } else {
    res.sendStatus(403);
    return;
  }
};
