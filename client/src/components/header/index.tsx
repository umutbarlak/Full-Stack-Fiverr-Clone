import React from "react";
import { IoSearch } from "react-icons/io5";
import { Link } from "react-router-dom";
import User from "./user";
import Links from "./links";
import { useAuth } from "../../context/authContext";

const Header = () => {
  const { user, logout } = useAuth();

  return (
    <header className="p-5 shadow">
      <div className="flex max justify-between gap-4 md:gap-8">
        <div>
          <Link to="/">
            <img className="w-[100px]" src="/fiverr.png" alt="" />
          </Link>
        </div>
        <form className="flex flex-1 border rounded overflow-auto max-w-[500px]">
          <input
            className="w-full h-full px-3"
            placeholder="hizmet ara"
            type="text"
          />
          <button className="bg-black p-2 text-white text-xl max-md:hidden">
            <IoSearch />
          </button>
        </form>
        <div className="flex items-center gap-2 relative group">
          {user ? <User data={user} logout={logout} /> : <Links />}
        </div>
      </div>
    </header>
  );
};

export default Header;
