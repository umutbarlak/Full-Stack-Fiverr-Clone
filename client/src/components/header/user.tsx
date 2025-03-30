import React from "react";
import { Link } from "react-router-dom";

const User = () => {
  return (
    <>
      <img src="" className="size-[40px] rounded-full object-cover" alt="" />
      <span>umutbarlak</span>

      <div className="w-[150px] text-[13px] flex-col text-center absolute top-[40px] transition duration-500 bg-gray-200 rounded-md hidden group-hover:flex">
        <Link className="px-5 py-2 hover:bg-gray-100" to={"/my-gigs"}>
          Hizmetler
        </Link>
        <Link className="px-5 py-2 hover:bg-gray-100" to={"/add-gig"}>
          Hizmet Ekle
        </Link>
        <Link className="px-5 py-2 hover:bg-gray-100" to={"/"}>
          Siparişler
        </Link>
        <Link className="px-5 py-2 hover:bg-gray-100" to={"/"}>
          Mesajlar
        </Link>
        <button
          onClick={() => alert("çıkış yapılıyor")}
          className="px-5 py-2 hover:bg-gray-100"
        >
          Çıkış Yap
        </button>
      </div>
    </>
  );
};

export default User;
