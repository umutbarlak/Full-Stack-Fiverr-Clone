import { createContext, JSX, useContext, useEffect, useState } from "react";
import { IFormUser, ILoginUser, IUser } from "../types";
import api from "../api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

type ContextType = {
  user: IUser | null;
  isLoading: boolean;
  register: (user: IFormUser) => void;
  login: (user: ILoginUser) => void;
  logout: () => void;
};

export const AuthContext = createContext<ContextType>({
  user: null,
  isLoading: true,
  register: () => {},
  login: () => {},
  logout: () => {},
});

export const AuthProvider = ({ children }: { children: JSX.Element }) => {
  const [user, setUser] = useState<IUser | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const navigate = useNavigate();

  console.log(isLoading);

  useEffect(() => {
    const token = localStorage.getItem("token") || document.cookie;
    setIsLoading(true);
    if (!token) return setIsLoading(false);
    api
      .get("/auth/profile")
      .then((res) => setUser(res.data.user))
      .catch((err) => {
        localStorage.removeItem("token");
        toast.info("Oturumunuzun süresi doldu tekrar giriş yapın");
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  const register = (user: IFormUser) => {
    console.log(user);
    api
      .post("/auth/register", user, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        console.log(res);
        toast.info("Hesabınız oluşturuldu. Giriş Yapabilirsiniz");
        navigate("/login");
      })
      .catch((err) => toast.error(err.response?.data?.message));
  };

  const login = (user: ILoginUser) => {
    setIsLoading(true);
    api
      .post("/auth/login", user)
      .then((res) => {
        setUser(res.data.user);
        localStorage.setItem("token", res.data.token);
        toast.success("Oturumunuz açıldı");
        navigate("/");
      })
      .catch((err) => toast.error(err.response?.data?.message))
      .finally(() => {
        setIsLoading(false);
      });
  };

  const logout = () => {
    api
      .post("/auth/logout")
      .then(() => {
        setUser(null);
        localStorage.removeItem("token");
        toast.info("Oturumunuz kapandı");
        navigate("/login");
      })
      .catch((err) => console.log(err));
  };

  return (
    <AuthContext.Provider value={{ user, isLoading, register, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
