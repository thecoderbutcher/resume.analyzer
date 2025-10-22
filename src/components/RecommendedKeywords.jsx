import Card from "./Card";
import { useCvStore } from "../../store/useCvStore";
import { FaKey } from "react-icons/fa";

const RecommendedKeywords = () => {
  const { analysis } = useCvStore();
  return (
    <Card>
      <div className="flex flex-col gap-2 mb-4 items-start">
        <div className="flex gap-2 items-center">
          <div className="bg-blue-500/30 p-2 rounded-full">
            <FaKey className="text-xl" />
          </div>
          <h3>Recommended Keywords</h3>
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
              Consider incorporating these keywords naturally into your resume
              to improve ATS Compatibility and increase your chances of getting
              notice by recruiters.
            </p>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default RecommendedKeywords;
