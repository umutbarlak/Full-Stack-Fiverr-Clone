import { ISellerUser } from "../../types";
import Rating from "../../components/rating";
import { RiPokerDiamondsFill } from "react-icons/ri";

type Props = {
  user: ISellerUser;
};

const UserInfo = ({ user }: Props) => {
  return (
    <div>
      <h1 className="font-bold text-lg mt-10 mb-3">
        {user.username} i tanıyalım
      </h1>

      <div className="flex gap-5 items-center flex-col">
        <img
          src={user.photo}
          alt=""
          className="size-28 rounded-full object-cover"
        />
        <h4 className="font-semibold">{user.username}</h4>
        <p className="text-gray-600 text-center">{user.desc}</p>
        <div className="flex items-center gap-5">
          <Rating rating={4.7} reviews={"156 reviews"} />
          <div className="flex items-center">
            <span className="text-sm font-semibold me-2">Level 2</span>
            <RiPokerDiamondsFill />
            <RiPokerDiamondsFill />
            <RiPokerDiamondsFill className="text-gray-500" />
          </div>
        </div>
      </div>
      <div className="flex gap-5 mt-5">
        <button className="py-2 px-5 border border-gray-800 rounded-md">
          İletişime geç
        </button>
        <button className="py-2 px-5 border border-gray-800 rounded-md">
          Toplantı Ayarla
        </button>
      </div>
      <div className="border my-10 p-5 grid md.grid-cols-2 gap-5">
        <Field label="Nereden" value={user.country} />
        <Field label="Üye Olma Tarihi" value={user.createdAt} />
        <Field label="Telefon" value={user.phone} />
        <Field label="Email" value={user.email} />
      </div>
    </div>
  );
};

type FieldProps = {
  label: string;
  value: string | number;
};

const Field = ({ label, value }: FieldProps) => {
  return (
    <div className="flex flex-col gap-1">
      <span className="text-gray-500">{label}</span>
      <span className="text-zinc-700 font-semibold">{value}</span>
    </div>
  );
};

export default UserInfo;
