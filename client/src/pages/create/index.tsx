import { FormEvent, use } from "react";
import Input from "../../components/input";
import Select from "../../components/input/select";
import { categories, inputs } from "../../utils/constants";
import { useMutation } from "@tanstack/react-query";
import api from "../../api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import Loader from "../../components/loader";

const Create = () => {
  const navigate = useNavigate();
  const { isPending, mutate } = useMutation({
    mutationFn: (data: FormData) =>
      api.post("/gigs", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }),
    onError: (err) => {
      toast.error("Hizmet oluşturulurken bir hata oluştu");
    },
    onSuccess: (res) => {
      toast.success("Hizmet başarıyla oluşturuldu");
      navigate(`/detail/${res.data.gig._id}`);
    },
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data = new FormData(e.currentTarget);

    mutate(data);
  };

  return (
    <div>
      <h1 className="title text-3xl">Yeni Hizmet Oluştur</h1>
      <form onSubmit={handleSubmit}>
        <div className="grid md:grid-cols-2 gap-x-10">
          {inputs.map((props, key) => (
            <Input key={key} {...props} />
          ))}

          <Select label="Kategory" options={categories} name="category" />
        </div>

        <div className="flex md:justify-center my-5">
          <button
            disabled={isPending}
            className="btn bg-green-500 hover:bg-green-600 md:w-1/3 disabled:opacity-80"
          >
            {isPending ? <Loader /> : "Oluştur"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Create;
