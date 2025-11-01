import Card from "../../../components/Card";
import { useCvStore } from "../../../../store/useCvStore";
import { FaKey } from "react-icons/fa";
import { useLangStore } from "../../../../store/useLangStore";
import { recommendedKeywords } from "../../../../constants/language";

const RecommendedKeywords = () => {
  const { analysis } = useCvStore();
  const { lang } = useLangStore();

  return (
    <Card>
      <div className="flex flex-col gap-2 mb-4 items-start">
        <div className="flex gap-2 items-center">
          <div className="bg-blue-500/30 p-2 rounded-full">
            <FaKey className="text-xl" />
          </div>
          <h3>{recommendedKeywords[lang].title}</h3>
        </div>
        <div>
          <div className="flex flex-wrap gap-3 mb-4">
            {analysis.keywords.map((k, i) => (
              <span
                key={i}
                className=" p-2 bg-blue-500/20 border border-blue-500/30 rounded-lg text-blue-400"
              >
                {k}
              </span>
            ))}
          </div>
          <div className="flex items-center gap-1">
            <span className="text-base mt-0.5">💡</span>
            <p className=" text-slate-400 text-sm leading-relaxed">
              {recommendedKeywords[lang].text}
            </p>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default RecommendedKeywords;
