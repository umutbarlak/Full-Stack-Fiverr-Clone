import { model, Schema } from "mongoose";

export interface IUser {
  _id: string;
  username: string;
  email: string;
  password: string;
  photo: string;
  country: string;
  isSeller: boolean;
  phone?: string;
  desc?: string;
  createdAt: Date;
  updatedAt: Date;
}

const userSchema = new Schema<IUser>(
  {
    username: {
      type: String,
      required: [true, "Lütfen username alanını doldurunuz"],
      unique: [true, "Bu isimde bir kullanıcı zaten mevcut"],
    },
    email: {
      type: String,
      required: [true, "Lütfen email alanını doldurunuz"],
      unique: [true, "Bu email adresi zaten mevcut"],
    },
    password: {
      type: String,
      required: [true, "Lütfen password alanını doldurunuz"],
    },
    photo: { type: String, default: "https://picsum.photos/200" },
    country: {
      type: String,
      required: [true, "Lütfen country alanını belirleyin"],
    },
    isSeller: { type: Boolean, default: false },
    phone: { type: String },
    desc: { type: String },
  },
  { timestamps: true }
);

const User = model<IUser>("User", userSchema);

export default User;
