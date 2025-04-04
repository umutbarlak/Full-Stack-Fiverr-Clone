import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";
import api from "../../api";
import Title from "./title";
import Loader from "../../components/loader";
import Error from "../../components/error";
import Card from "../../components/card";
import { IGig } from "../../types";

const Search = () => {
  const [searchParams] = useSearchParams();

  const query = searchParams.get("query");
  const category = searchParams.get("category");
  const params = {
    search: query,
    category,
  };

  const { isLoading, error, data, refetch } = useQuery<IGig[]>({
    queryKey: ["gigs", params],
    queryFn: () => api.get("/gigs", { params }).then((res) => res.data.gigs),
  });

  console.log(isLoading, error, data);

  return (
    <div>
      <Title query={query} category={category} />
      {isLoading ? (
        <Loader designs="size-10 my-20" />
      ) : error ? (
        <Error refetch={refetch} info={error.message} />
      ) : (
        <>
          {data?.length === 0 ? (
            <div className="text-center text-xl font-bold text-gray-500 my-20">
              Aradığınız kriterlere uygun hizmet bulunamadı.
            </div>
          ) : (
            <div className="layout">
              {data?.map((item) => (
                <Card key={item._id} item={item} />
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Search;
