import { useMutation, useQueryClient } from "@tanstack/react-query";
import { IGig } from "../../types";
import api from "../../api";
import Loader from "../loader";

type Props = {
  item: IGig;
};

const Buttons = ({ item }: Props) => {
  const client = useQueryClient();
  const { mutate, isPending } = useMutation({
    mutationFn: () => api.delete(`/gigs/${item._id}`),
    onSuccess: () => {
      client.invalidateQueries({ queryKey: ["my-gigs"] });
    },
  });
  console.log(isPending);

  return (
    <div className="flex justify-end p-2 pb-0">
      <button
        disabled={isPending}
        onClick={() => mutate()}
        className="btn w-fit bg-red-500 py-1"
      >
        {isPending ? <Loader /> : "Sil"}
      </button>
    </div>
  );
};

export default Buttons;
