import { NextFunction, Request, Response } from "express";

export const gelAllGigs = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  res.status(200).json({ message: "İşlem başarılı" });
};
