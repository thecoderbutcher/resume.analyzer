import { FaCheck, FaTimes } from "react-icons/fa";
import { useCvStore } from "../../../../store/useCvStore";
import { FaRobot } from "react-icons/fa";
import { useLangStore } from "../../../../store/useLangStore";
import { atsOptimization } from "../../../../constants/language";
import Card from "../../../components/Card";

const ATSOptimization = () => {
  const { presenceChecklist } = useCvStore();
  const { lang } = useLangStore();

  return (
    <Card>
      <div className="flex gap-1 mb-4 items-center">
        <div className="bg-purple-500/30 p-2 rounded-full">
          <FaRobot className="text-xl" />
        </div>
        <p className="text-lg">{atsOptimization[lang].title}</p>
      </div>
      <div className="flex flex-col gap-4">
        <Card styles={"bg-purple-500/10 border border-purple-500/30"}>
          <div className="flex items-center gap-1">
            <p className="font-semibold text-violet-300">
              {atsOptimization[lang].whatis}
            </p>
          </div>
          <p className="text-sm leading-relaxed">
            <strong className="text-violet-300 mr-1">
              {atsOptimization[lang].strongText}
            </strong>
            {atsOptimization[lang].text}
          </p>
        </Card>
        <Card styles={"bg-purple-500/10 border border-purple-500/30"}>
          <div className="flex gap-2">
            <FaRobot className="text-xl" />
            <p className="font-semibold">
              {atsOptimization[lang].compatibility}
            </p>
          </div>
          <div className="flex flex-col gap-1 mt-1">
            {(presenceChecklist || []).map((item, index) => (
              <div
                key={index}
                className={`flex items-start gap-2 ${
                  item.present ? "text-emerald-400" : "text-red-400"
                }`}
              >
                <div className="flex items-center gap-1">
                  <span>{item.present ? <FaCheck /> : <FaTimes />}</span>
                  <span>{atsOptimization[lang][item.label]}</span>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </Card>
  );
};

export default ATSOptimization;
