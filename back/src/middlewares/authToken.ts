import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";

interface DecodedToken {
  id: number;
  email?: string;
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

  jwt.verify(
    token,
    secret,
    (
      err: jwt.VerifyErrors | null,
      decoded: jwt.JwtPayload | undefined | string
    ) => {
      if (err) {
        return res.sendStatus(403); 
      }
      req.user = decoded as DecodedToken;
      next(); 
    }
  );
};
