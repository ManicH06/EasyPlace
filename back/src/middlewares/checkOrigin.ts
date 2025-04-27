import { Request, Response, NextFunction } from "express";

export const checkOrigin = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const allowedOrigin = process.env.FRONT_URL as string;
  const origin = req.headers.origin;
  if (!origin || !origin.startsWith(allowedOrigin)) {
     res.status(403).json({ message: "Forbidden" });
    return;
  }
  next();
};
