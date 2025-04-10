import { FormEvent } from "react";
import { IoSearch } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const text = (e.currentTarget[0] as HTMLInputElement).value;

    if (text) navigate(`/search?query=${text}`);
  };
  return (
    <section className="bg-f-green max-md:-m-5 h-[40vh] text-white px-6 py-5 md:px-12 md:py-10 md:rounded-md flex flex-col justify-center items-center">
      <div className="max-w-[600px]">
        <h1 className="text-4xl md:text-5xl font-light md:text-center">
          Profesyonel iş gücünüzü{" "}
          <span className="font-serif">freelancer'larla</span> ölçeklendirin
        </h1>
        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-md w-full flex gap-5 mt-10"
        >
          <input
            className="flex-1 p-2 rounded-md text-black outline-none"
            type="text"
            placeholder="hizmet ara"
          />
          <button className="bg-f-green m-1 p-2 rounded-md hover:bg-opacity-70 transiton">
            <IoSearch />
          </button>
        </form>
      </div>
    </section>
  );
};

export default Hero;
