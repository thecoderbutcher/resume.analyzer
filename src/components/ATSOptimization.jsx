import { FaSearch, FaLightbulb } from "react-icons/fa";
import { TbRadarFilled } from "react-icons/tb";
import { useCvStore } from "../../store/useCvStore";
import { FaRobot } from "react-icons/fa";
import Card from "./Card";

const ATSOptimization = () => {
  const { presenceChecklist } = useCvStore();
  return (
    <Card>
      <div className="flex gap-1 mb-4 items-center">
        <div className="bg-purple-500/30 p-2 rounded-full">
          <FaRobot className="text-xl" />
        </div>
        <p className="text-lg">ATS Optimization</p>
      </div>
      <div className="flex flex-col gap-4">
        <Card styles={"bg-purple-500/10 border border-purple-500/30"}>
          <div className="flex items-center gap-1">
            <p className="font-semibold text-violet-300">What is ATS?</p>
          </div>
          <p className="text-sm leading-relaxed">
            <strong className="text-violet-300 mr-1">
              Applicant Tracking Systems (ATS)
            </strong>
            are software tools used by 75%+ of employers to automatically screen
            resumes before human review. These systems scan for keywords, proper
            formatting, and relevant qualifications to rank candidates. If your
            resume isn't ATS-Friendly, it may never reach a human recruiter.
          </p>
        </Card>
        <Card styles={"bg-purple-500/10 border border-purple-500/30"}>
          <div className="flex gap-2">
            <FaRobot className="text-xl" />
            <p className="font-semibold">ATS Compatibility Checklist</p>
          </div>
          <div className="flex flex-col gap-1 mt-1">
            {(presenceChecklist || []).map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-2 text-slate-200"
              >
                <span>{item.present ? "​✅" : "❌"}</span>
                <span
                  className={`${
                    item.present ? "text-emerald-400" : "text-red-400"
                  }`}
                >
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </Card>
  );
};

export default ATSOptimization;
