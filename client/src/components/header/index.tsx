import { Link } from "react-router-dom";
import User from "./user";
import Links from "./links";
import { useAuth } from "../../context/authContext";
import Form from "./form";

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
        <Form />
        <div className="flex items-center gap-2 relative group">
          {user ? <User data={user} logout={logout} /> : <Links />}
        </div>
      </div>
    </header>
  );
};

export default Header;
