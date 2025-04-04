import { Link } from "react-router-dom";
import { IUser } from "../../types";

type Props = {
  data: IUser;
  logout: () => void;
};

const User = ({ data, logout }: Props) => {
  return (
    <>
      <img
        src={data?.photo}
        className="size-[40px] rounded-full object-cover"
        alt=""
      />
      <span className="font-semibold">{data?.username}</span>

      <div className="w-[150px] text-[13px] flex-col text-center absolute top-[40px] transition duration-500 bg-gray-200 rounded-md hidden group-hover:flex overflow-hidden z-10">
        {data.isSeller && (
          <>
            <Link className="px-5 py-2 hover:bg-gray-100" to={"/my-gigs"}>
              Hizmetlerim
            </Link>
            <Link className="px-5 py-2 hover:bg-gray-100" to={"/add-gig"}>
              Hizmet Ekle
            </Link>{" "}
          </>
        )}
        <Link className="px-5 py-2 hover:bg-gray-100" to={"/"}>
          Siparişler
        </Link>
        <Link className="px-5 py-2 hover:bg-gray-100" to={"/"}>
          Mesajlar
        </Link>
        <button onClick={logout} className="px-5 py-2 hover:bg-gray-100">
          Çıkış Yap
        </button>
      </div>
    </>
  );
};

export default User;
