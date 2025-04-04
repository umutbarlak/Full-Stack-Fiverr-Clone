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

export interface ISellerUser {
  _id: string;
  username: string;
  email: string;
  photo: string;
  country: string;
  isSeller: true;
  createdAt: string;
  updatedAt: string;
  phone: number;
  desc: string;
  _v: number;
}

export interface ILoginUser {
  username: string;
  password: string;
}

export interface IInput {
  label: string;
  name: string;
  required: boolean;
  type?: "number" | "text" | "file" | "textarea" | "email" | "password";
  multiple?: boolean;
  min?: number;
  max?: number;
}

export interface IGig {
  _id: string;
  user: {
    _id: string;
    username: string;
    photo: string;
  };
  images: string[];
  title: string;
  description: string;
  reviewCount: number;
  starCount: number;
  category: string;
  coverImage: string;
  package_title: string;
  package_description: string;
  package_price: number;
  package_features: string[];
  package_duration: number;
  package_revisions: number;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface IGigDetails extends IGig {
  user: ISellerUser;
}
