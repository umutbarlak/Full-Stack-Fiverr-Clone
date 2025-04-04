type Props = {
  info?: string;
  refetch: () => void;
};
const Error = ({ info, refetch }: Props) => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 p-4 text-center bg-red-100 border border-red-400 rounded-lg max-w-[500px] mx-auto my-10 transition">
      {info || "Üzgünüm, bir hata oluştu. Lütfen daha sonra tekrar deneyin."}
      <p>Lütfen daha sonra tekrar deneyin.</p>
      <button onClick={refetch} className="btn bg-green-500 hover:bg-green-600">
        Tekrar Dene
      </button>
    </div>
  );
};

export default Error;
