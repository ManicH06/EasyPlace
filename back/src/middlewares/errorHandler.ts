/* eslint-disable @typescript-eslint/no-unused-vars */
import { Request, Response, NextFunction } from "express";
import { MulterError } from "multer";
import HTTPError from "../errors/HTTPError";

export default function (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) {
  console.log(err);
  if (err instanceof MulterError) {
    // multer errors handling
    console.log("mutlerError: ", err);
  }
  if (err instanceof HTTPError) {
    res.status(err.status).json({ status: "error", message: err.message });
  } else {
    console.log("error: ", err);
    res
      .status(500)
      .json({ status: "error", message: "Une erreur est survenue." });
  }
}
