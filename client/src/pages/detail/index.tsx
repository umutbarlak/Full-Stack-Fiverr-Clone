import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import api from "../../api";
import Loader from "../../components/loader";
import Error from "../../components/error";
import GigInfo from "./gig-info";
import UserInfo from "./user-info";
import PackageInfo from "./package-info";
import { IGigDetails } from "../../types";
import BreadCrumb from "./bread-crumb";

const Detail = () => {
  const { id } = useParams();

  const { isLoading, error, data, refetch } = useQuery<IGigDetails>({
    queryKey: ["gig"],
    queryFn: () => api.get(`/gigs/${id}`).then((res) => res.data.gig),
  });
  console.log(data?.user);
  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Error refetch={refetch} />
      ) : (
        data && (
          <div className="flex flex-col lg:flex-row gap-10">
            <div className="overflow-y-auto">
              <BreadCrumb category={data.category} />
              <GigInfo gig={data} />
              <UserInfo user={data.user} />
            </div>
            <PackageInfo data={data} />
          </div>
        )
      )}
    </div>
  );
};

export default Detail;
