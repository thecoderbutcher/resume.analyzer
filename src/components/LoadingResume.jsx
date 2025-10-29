import { HashLoader } from "react-spinners";
import { useLangStore } from "../../store/useLangStore";
import { loadingResume } from "../../constants/language";

const LoadingResume = () => {
  const { lang } = useLangStore();
  return (
    <div className="flex flex-col justify-center items-center gap-2 p-8 mx-auto">
      <HashLoader color="#108bfc" />
      <h3 className="text-lg sm:text-xl">{loadingResume[lang].title}</h3>
      <p className="text-sm sm:text-base text-slate-500">
        {loadingResume[lang].description}
      </p>
    </div>
  );
};

export default LoadingResume;
