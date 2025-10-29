import { useLangStore } from "../../store/useLangStore";
import { title } from "../../constants/language";

const Title = () => {
  const { lang } = useLangStore();
  return (
    <div className="flex flex-col gap-4 mb-8 items-center justify-center">
      <h1 className="text-6xl  uppercase">Resume Analyzer</h1>
      <p className="font-light">{title[lang].subtitle}</p>
    </div>
  );
};

export default Title;
