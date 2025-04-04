import { Link } from "react-router-dom";
import { IGig } from "../../types";
import Rating from "../rating";
import Buttons from "./buttons";

type Props = {
  item: IGig;
  expand?: boolean;
};
const Card = ({ item, expand }: Props) => {
  return (
    <div className={expand ? "border rounded-md shadow-md" : ""}>
      {expand && <Buttons item={item} />}
      <Link
        to={`/detail/${item._id}`}
        className="p-2 rounded-md cursor-pointer flex flex-col gap-2 group"
      >
        <img
          src={item.coverImage}
          alt={item.title}
          className="rounded-md h-full w-full object-cover max-h-[200px]"
        />
        <div className="flex items-center gap-2">
          <img
            className="size-10 rounded-full object-cover"
            src={item.user.photo}
            alt=""
          />
          <p>
            <span className="font-semibold">{item.user.username} </span>
            <span className="text-gray-500">tarafından oluşturuldu</span>
          </p>
        </div>

        <h2 className="line-clamp-2 group-hover:underline">{item.title}</h2>

        <Rating rating={4.5} reviews="1.5k+" />

        <p className="font-semibold">
          ₺{item.package_price.toLocaleString()}{" "}
          <span className="text-gray-500 font-normal">
            den başlayan fiyatlarla
          </span>
        </p>
      </Link>
    </div>
  );
};

export default Card;
