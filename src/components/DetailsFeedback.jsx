import Card from "./Card";
import { GrLineChart } from "react-icons/gr";
import { FaCheck } from "react-icons/fa6";
import { BsDot } from "react-icons/bs";
import { useCvStore } from "../../store/useCvStore";

const DetailsFeedback = () => {
  const { analysis } = useCvStore();

  return (
    <div className="flex md:flex-col lg:flex-row gap-4">
      <Card styles={"flex w-full bg-green-500/20 border-green-500/40"}>
        <div className="flex flex-col items-center justify-center w-full gap-2">
          <div className="p-2 rounded-full bg-green-500/30">
            <FaCheck className="text-2xl text-green-500" />
          </div>
          <p className="text-lg font-semibold text-green-500">Top Strengths</p>
          <div className="flex flex-col gap-2 w-full items-center px-1 py-2 rounded-lg bg-green-500/20">
            {analysis.strengths.slice(0, 3).map((strength, index) => (
              <div key={index} className="flex">
                <span className="text-2xl">
                  <BsDot />
                </span>
                <span className="text-slate-300">{strength}</span>
              </div>
            ))}
          </div>
        </div>
      </Card>

      <Card styles={"flex w-full bg-orange-500/20 border-orange-500/40"}>
        <div className="flex flex-col items-center justify-center w-full gap-2">
          <div className="p-2 rounded-full bg-orange-500/30">
            <GrLineChart className="text-2xl text-orange-500" />
          </div>
          <p className="text-lg font-semibold text-orange-500">
            Main Improvements
          </p>
          <div className="flex flex-col gap-2 w-full items-center px-1 py-2 rounded-lg bg-orange-500/20">
            {analysis.strengths.slice(0, 3).map((strength, index) => (
              <div key={index} className="flex">
                <span className="text-2xl">
                  <BsDot />
                </span>
                <span className="text-slate-300">{strength}</span>
              </div>
            ))}
          </div>
        </div>
      </Card>
    </div>
  );
};

export default DetailsFeedback;
