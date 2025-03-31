import React, { FormEvent, useContext } from "react";
import Input from "../../components/input";
import api from "../../api/index";
import { Link } from "react-router-dom";
import { ILoginUser } from "../../types";
import { useAuth } from "../../context/authContext";

const Login = () => {
  const { login } = useAuth();
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.target as HTMLFormElement);
    const user = Object.fromEntries(formData.entries());

    login(user as unknown as ILoginUser);
  };
  return (
    <div className="pt-16 max-w-[500px] mx-auto sm:min-w-[400px] max-sm:w-full">
      <h1 className="title ">Hesabınıza Giriş Yapın</h1>
      <form onSubmit={handleSubmit}>
        <Input label="İsim" name="username" required={true} />
        <Input label="Şifre" name="password" type="password" required={true} />
        <button className="btn">Giriş Yap</button>
        <p className="mt-5 text-gray-50000">
          Hesabınız yok mu?
          <Link to={"/register"} className="ms-1 text-blue-500">
            Kaydol
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
