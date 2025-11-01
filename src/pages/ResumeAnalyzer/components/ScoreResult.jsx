import Card from "../../../components/Card";
import { GiTrophy, GiStarFormation } from "react-icons/gi";
import { FaStar } from "react-icons/fa";
import { GrLineChart } from "react-icons/gr";
import { useCvStore } from "../../../../store/useCvStore";
import { useLangStore } from "../../../../store/useLangStore";
import { scoreResult } from "../../../../constants/language";

const ScoreResult = () => {
  const { analysis } = useCvStore();
  const { lang } = useLangStore();
  const overallScore = parseInt(analysis.overallScore);

  return (
    <Card>
      <div className="flex flex-col items-center gap-2">
        <div className="flex gap-1 items-center text-3xl">
          <GiTrophy className="text-yellow-500 " />
          <h3 className="font-semibold">{scoreResult[lang].title}</h3>
        </div>
        <p className=" font-semibold text-6xl text-blue-400 p-2">
          {analysis.overallScore || "7"}
        </p>

        {overallScore >= 8 && (
          <div className="flex gap-1 border border-green-500/20 bg-green-500/10 p-2 items-center rounded-2xl">
            <GiStarFormation className="text-2xl text-yellow-500" />
            <span>{scoreResult[lang].execellent}</span>
          </div>
        )}
        {overallScore >= 6 && overallScore < 8 && (
          <div className="flex gap-1 border border-orange-500/20 bg-orange-500/10 p-2 items-center rounded-2xl">
            <FaStar className="text-2xl text-yellow-500" />
            <span>{scoreResult[lang].good}</span>
          </div>
        )}
        {overallScore < 6 && (
          <div className="flex gap-1 border border-red-500/20 bg-red-500/10 p-2 items-center rounded-2xl">
            <GrLineChart className="text-2xl text-red-500" />
            <span>{scoreResult[lang].needsImprovements}</span>
          </div>
        )}
        <div className="h-4 rounded-2xl w-[90%] bg-slate-600/50 mx-auto mt-3">
          <div
            className={`inline-flex items-center gap-2 h-4 rounded-full border-1 ${overallScore >= 8 ? "bg-green-500/40 border-green-500/30" : overallScore >= 6 ? "bg-orange-500/40 border-orange-500/30" : "bg-red-500/40 border-red-500/30"}`}
            style={{
              width: `${(parseInt(analysis.overallScore) / 10) * 100}%`,
            }}
          ></div>
        </div>
        <p className="text-slate-500 text-sm font-light">
          {scoreResult[lang].text}
        </p>
      </div>
    </Card>
  );
};

export default ScoreResult;
