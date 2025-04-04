import { useQuery } from "@tanstack/react-query";
import { useAuth } from "../../context/authContext";
import api from "../../api";
import Card from "../../components/card";
import Loader from "../../components/loader";
import Error from "../../components/error";
import { IGig } from "../../types";
import { useNavigate } from "react-router-dom";

const MyGigs = () => {
  const navigate = useNavigate();
  const { user } = useAuth();

  const { isLoading, error, data, refetch } = useQuery<IGig[]>({
    queryKey: ["my-gigs", user],
    queryFn: () =>
      api
        .get("/gigs", { params: { userID: user?._id } })
        .then((res) => res.data.gigs),
  });

  console.log(error);

  return (
    <div>
      <h1 className="title text-3xl">Hizmetlerim</h1>
      <div>
        {isLoading ? (
          <Loader designs="size-8 md:size-10 mt-10" />
        ) : error ? (
          <Error info={error.message} refetch={refetch} />
        ) : (
          data?.length === 0 && (
            <div className="flex flex-col items-center justify-center h-full">
              <h1 className="text-xl font-bold text-gray-600">
                Henüz hizmet eklemedin
              </h1>
              <p className="text-gray-500">
                Hizmet eklemek için aşağıdaki butona tıklayın.
              </p>
              <button
                onClick={() => navigate("/add-gig")}
                className="btn mt-5 bg-green-500"
              >
                Hizmet Ekle
              </button>
            </div>
          )
        )}
        <div className="layout">
          {data?.map((item) => (
            <Card expand item={item} key={item._id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyGigs;
