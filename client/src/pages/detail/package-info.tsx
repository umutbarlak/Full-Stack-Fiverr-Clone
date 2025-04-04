import {
  FaArrowDown,
  FaArrowRight,
  FaRecycle,
  FaRegClock,
} from "react-icons/fa";
import { IGigDetails } from "../../types";
import { IoIosArrowDown, IoMdCheckbox, IoMdCheckmark } from "react-icons/io";

type Props = {
  data: IGigDetails;
};

const PackageInfo = ({ data }: Props) => {
  return (
    <div className="h-fit flex flex-col gap-8 border shadow rounded-md p-5 md:sticky md:top-5">
      <div className="flex justify-between items-center font-semibold">
        <h2 className="text-xl">{data.package_title}</h2>
        <p className="text-lg">{data.package_price.toLocaleString()}₺</p>
      </div>
      <h2 className="text-gray-600 ">{data.package_description}</h2>
      <div className="flex gap-10 font-semibold whitespace-nowrap">
        <p className="flex gap-2 items-center">
          <FaRegClock />
          {data.package_duration} günde teslimat
        </p>
        <p className="flex gap-2 items-center">
          <FaRecycle />
          {data.package_revisions} revizyon hakkı
        </p>
      </div>
      <ul>
        {data.package_features.map((feature, index) => (
          <li key={index} className="flex gap-2 items-center">
            <IoMdCheckmark className="text-black" />
            <span className="text-gray-600">{feature}</span>
          </li>
        ))}
      </ul>
      <button className="flex items-center bg-black text-white p-2 rounded-md hover:bg-zinc-700 transition text-nowrap">
        <span className="flex-1 font-semibold">Devam Et</span>
        <FaArrowRight />
      </button>
      <button className="flex items-center gap-2 border   p-2 rounded-md hover:bg-zinc-200 transition justify-center">
        <span className="font-semibold">İletişime Geç</span>
        <IoIosArrowDown />
      </button>
    </div>
  );
};

export default PackageInfo;
