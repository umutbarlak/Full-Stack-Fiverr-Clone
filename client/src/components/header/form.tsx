import React, { FormEvent } from "react";
import { IoSearch } from "react-icons/io5";
import { useNavigate, useSearchParams } from "react-router-dom";

const Form = () => {
  const navigate = useNavigate();
  const [params] = useSearchParams();
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const text = (e.currentTarget[0] as HTMLInputElement).value;

    if (text) navigate(`/search?query=${text}`);
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-1 border rounded overflow-auto max-w-[500px]"
    >
      <input
        defaultValue={params.get("query") || ""}
        className="w-full h-full px-3"
        placeholder="hizmet ara"
        type="text"
      />
      <button className="bg-black p-2 text-white text-xl max-md:hidden">
        <IoSearch />
      </button>
    </form>
  );
};

export default Form;
