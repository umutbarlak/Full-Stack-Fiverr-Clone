import { FaStar } from "react-icons/fa";

type Props = {
  rating: number;
  reviews: string;
  designs?: string;
};

const Rating = ({ rating, reviews, designs }: Props) => {
  return (
    <div className={`flex gap-1 items-center ${designs}`}>
      <FaStar />
      <span>{rating}</span>
      <span className="text-gray-500 underline">({reviews})</span>
    </div>
  );
};

export default Rating;
