import { HashLoader } from "react-spinners";
const LoadingResume = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-2 p-8 mx-auto">
      <HashLoader color="#108bfc" />
      <h3 className="text-lg sm:text-xl">Analyzing Your Resume</h3>
      <p className="text-sm sm:text-base text-slate-500">Please wait while IA reviews your resume.</p>
    </div>
  );
};

export default LoadingResume;
