import { Request, Response, NextFunction } from "express";

export default function (
  middleware: (req: Request, res: Response, next: NextFunction) => void
) {
  return function (req: Request, res: Response, next: NextFunction) {
    try {
      middleware(req, res, next);
    } catch (error) {
      console.log(error);
      next(error);
    }
  };
}
