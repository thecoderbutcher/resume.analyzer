import Card from "../../../components/Card";
import { BsDot } from "react-icons/bs";
import { FaSearch, FaLightbulb } from "react-icons/fa";
import { TbRadarFilled } from "react-icons/tb";
import { useCvStore } from "../../../../store/useCvStore";
import { useLangStore } from "../../../../store/useLangStore";
import { resumeInsights } from "../../../../constants/language";

const ResumeInsights = () => {
  const { analysis } = useCvStore();
  const { lang } = useLangStore();

  return (
    <Card>
      <div className="flex gap-1 mb-4 items-center">
        <div className="bg-violet-500/30 p-2 rounded-full">
          <FaSearch className="text-xl" />
        </div>
        <p className="text-lg">{resumeInsights[lang].title}</p>
      </div>
      <div className="flex flex-col gap-4">
        <Card styles={"bg-cyan-500/20 border border-cyan-500/30"}>
          <div className="flex items-center gap-1">
            <TbRadarFilled className="text-2xl text-red-500" />
            <p className="font-semibold">{resumeInsights[lang].actionItems}</p>
          </div>
          <div className="flex flex-col">
            {(
              analysis.actionItems || [
                "Optimize keyword placement for better ATS scoring",
                "Enhance content with quantifiable achievements",
                "Consider industry-specific terminology",
              ]
            ).map((item, index) => (
              <div key={index} className="flex p-1">
                <span className="text-2xl">
                  <BsDot />
                </span>
                <span className="text-slate-200">{item}</span>
              </div>
            ))}
          </div>
        </Card>
        <Card styles={"bg-green-500/20 border border-green-500/30"}>
          <div className="flex items-center gap-1">
            <FaLightbulb className="text-xl text-yellow-500" />
            <p className="font-semibold">{resumeInsights[lang].proTips}</p>
          </div>
          <div className="flex flex-col">
            {(
              analysis.proTips || [
                "Use action verbs to start bullet points",
                "Keep descriptions concise and impactful",
                "Taylor keywords to specific job descriptions",
              ]
            ).map((tip, index) => (
              <div key={index} className="flex p-1">
                <span className="text-2xl">
                  <BsDot />
                </span>
                <span className="text-slate-200">{tip}</span>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </Card>
  );
};

export default ResumeInsights;
