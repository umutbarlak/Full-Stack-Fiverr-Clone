import { v2 as cloudinary } from "cloudinary";
import { NextFunction } from "express";
import error from "./error.ts";

cloudinary.config({
  cloud_name: "da0fgi2si",
  api_key: "555226634877839",
  api_secret: "2oAIfiYLgHDXewCoCXGvmr_xlf4",
});

const upload = async (
  file_path: string,
  next: NextFunction,
  folder: string = "avatars",
  type: "raw" | "auto" | "image" | "video" | undefined = "image"
) => {
  return await cloudinary.uploader.upload(
    file_path,
    {
      folder,
      resource_type: type,
    },
    (err) => {
      if (err) return next(error(400, "Fotoğraf yüklenemedi"));
    }
  );
};

export default upload;
