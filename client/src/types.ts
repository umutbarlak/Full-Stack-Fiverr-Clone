import { IconType } from "react-icons";

export interface ICategory {
  name: string;
  icon: IconType;
}

export interface IInfo {
  title: string;
  text: string;
}

export interface IFormUser {
  username: string;
  email: string;
  photo: File;
  country: string;
  password: string;
  isSeller: boolean;
  phone?: number;
  desc?: string;
}

export interface IUser {
  _id: string;
  username: string;
  email: string;
  photo: string;
  country: string;
  password: string;
  isSeller: boolean;
  createdAt: string;
  updatedAt: string;
  phone?: number;
  desc?: string;
}

export interface ILoginUser {
  username: string;
  password: string;
}
