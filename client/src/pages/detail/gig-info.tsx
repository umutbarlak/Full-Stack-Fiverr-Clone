import { IGigDetails } from "../../types";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import Rating from "../../components/rating";

type Props = {
  gig: IGigDetails;
};

const GigInfo = ({ gig }: Props) => {
  return (
    <div className="flex-1 flex flex-col gap-5">
      <h1 className="font-bold text-xl md:text-2xl">{gig.title}</h1>

      <div className="flex gap-3 items-center">
        <img src={gig.user.photo} className="size-12 rounded-full" />
        <div>
          <h4 className="font-bold">{gig.user.username}</h4>
          <Rating rating={4.3} reviews={"1k+ reviews"} />
        </div>
      </div>

      <Splide>
        {gig?.images.map((url, index) => (
          <SplideSlide key={index}>
            <img
              src={url}
              className="w-full h-[30vh] md:h-[40vh] object-cover rounded-lg"
            />
          </SplideSlide>
        ))}
      </Splide>

      <div>
        <h1 className="font-bold text-lg mt-5 mb-2">Bu hizmet hakkında</h1>
        <p className="text-gray-600">{gig.description}</p>
      </div>
    </div>
  );
};

export default GigInfo;
