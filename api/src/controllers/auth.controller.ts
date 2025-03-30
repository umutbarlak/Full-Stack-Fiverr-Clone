import { NextFunction, Request, Response } from "express";
import User, { IUser } from "../models/user.model.ts";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import error from "../utils/error.ts";
import catchAsync from "../utils/catchAsync.ts";

export const register = catchAsync(
  async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    console.log(req.file);

    const hashedPass: string = bcrypt.hashSync(req.body.password, 12);

    const newUser = await User.create({
      ...req.body,
      password: hashedPass,
    });

    const { password, ...userWithoutPass } = newUser;

    res
      .status(200)
      .json({ message: "Hesabınız oluşturuldu", data: userWithoutPass });
  }
);

export const login = catchAsync(
  async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const user: IUser | null = await User.findOne({
      username: req.body.username,
    });

    if (!user) return next(error(404, "Girdiğiniz bilgiler yanlış"));

    const isCorect = bcrypt.compareSync(req.body.password, user.password);

    if (!isCorect) return next(error(404, "Girdiğiniz bilgiler yanlış"));

    const token = jwt.sign(
      { id: user._id, isSeller: user.isSeller },
      process.env.JWT_KEY as string,
      {
        expiresIn: "7d", //! buraya bak
      }
    );

    const { password, ...userWithoutPass } = user;

    res
      .cookie("token", token, {
        httpOnly: true,
        sameSite: "none",
        expires: new Date(Date.now() + 14 * 24 * 3600 * 1000),
      })
      .status(200)
      .json({ message: "Hesaba giriş yapıldı", user: userWithoutPass, token });
  }
);

export const logout = catchAsync(
  async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    res
      .clearCookie("token")
      .status(200)
      .json({ message: "Hesaptan çıkış yapıldı" });
  }
);
