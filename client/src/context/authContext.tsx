import { createContext, JSX, useState } from "react";
import { IFormUser, ILoginUser, IUser } from "../types";
import axios from "axios";
import api from "../api";

type ContextType = {
  user: IUser | null;
  register: (user: IFormUser) => void;
  login: (user: ILoginUser) => void;
  logout: () => void;
};

export const AuthContext = createContext<ContextType>({
  user: null,
  register: () => {},
  login: () => {},
  logout: () => {},
});

export const AuthProvider = ({ children }: { children: JSX.Element }) => {
  const [user, setUser] = useState<IUser | null>(null);

  const register = (user: IFormUser) => {
    console.log(user);
    api
      .post("/auth/register", user, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((ress) => console.log(ress))
      .catch((err) => console.log(err));
  };

  const login = () => {};
  const logout = () => {};
  return (
    <AuthContext.Provider value={{ user, register, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
