import { FormEvent, useContext, useState } from "react";
import Input from "../../components/input";
import Toggle from "../../components/input/toggle";
import { Link } from "react-router-dom";
import { IFormUser } from "../../types";
import { AuthContext } from "../../context/authContext";

const Register = () => {
  const [isSeller, setIsSeller] = useState<boolean>(false);
  const { register } = useContext(AuthContext);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.target as HTMLFormElement);
    const newUser = Object.fromEntries(formData.entries());

    (newUser as unknown as IFormUser).isSeller = isSeller;

    register(newUser as unknown as IFormUser);
  };
  return (
    <div className="max-w-[900px] mx-auto">
      <form
        onSubmit={handleSubmit}
        className="grid md:grid-cols-2 md:gap-10 xl:gap-20 md:py-16"
      >
        <div>
          <h1 className="title">Yeni Hesap Oluştur</h1>
          <Input label="İsim" required={true} name="username" />
          <Input label="Email" required={true} name="email" type="email" />
          <Input label="Fotoğraf" required={true} name="photo" type="file" />
          <Input label="Ülke" required={true} name="country" />
          <Input
            label="Şifre"
            required={true}
            name="password"
            type="password"
          />
        </div>
        <div>
          <h1 className="title">Satıcı Olmak İstiyorum</h1>
          <Toggle setIsSeller={setIsSeller} />
          <Input
            disabled={!isSeller}
            label="Telefon"
            required={isSeller}
            type="number"
            name="phone"
          />
          <Input
            disabled={!isSeller}
            label="Açıklama"
            required={isSeller}
            type="textarea"
            name="desc"
          />
          <button type="submit" className="btn">
            Kaydol
          </button>
          <p className="mt-5 text-gray-500">
            Hesabınız var mı?
            <Link className="ms-3 text-blue-500" to="/login">
              Giriş Yap
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Register;
