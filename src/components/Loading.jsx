import { HashLoader } from "react-spinners";

const Loading = ({ title, description }) => {
  return (
    <div className="flex flex-col justify-center items-center gap-2 p-8 mx-auto">
      <HashLoader color="#108bfc" />
      <h3 className="text-lg sm:text-xl">{title}</h3>
      <p className="text-sm sm:text-base text-slate-500">{description}</p>
    </div>
  );
};

export default Loading;
