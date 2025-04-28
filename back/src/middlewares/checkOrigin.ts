import { Request, Response, NextFunction } from "express";

export const checkOrigin = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const allowedOrigin = process.env.FRONT_URL as string;
  const origin = req.headers.origin;

  if (!origin) {
    next(); 
    return;
  }

  if (origin && !origin.startsWith(allowedOrigin)) {
    console.warn(`Forbidden origin: ${origin}`);
    res.status(403).json({ message: "Forbidden" });
    return; 
  }

  next(); 
};
