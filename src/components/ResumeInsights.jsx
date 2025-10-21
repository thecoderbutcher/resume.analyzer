import { FaSearch, FaLightbulb } from "react-icons/fa";
import { TbRadarFilled } from "react-icons/tb";
import Card from "./Card";

const ResumeInsights = () => {
  return (
    <Card>
      <div className="flex gap-1 mb-4 items-center">
        <div className="bg-violet-500/30 p-2 rounded-full">
          <FaSearch className="text-xl" />
        </div>
        <p className="text-lg">Resume Insights</p>
      </div>
      <div className="flex flex-col gap-4">
        <Card styles={"bg-cyan-500/20 border border-cyan-500/30"}>
          <div className="flex items-center gap-1">
            <TbRadarFilled className="text-2xl text-red-500" />
            <p className="font-semibold">Action Items</p>
          </div>
          <div className="flex flex-col">text</div>
        </Card>
        <Card styles={"bg-green-500/20 border border-green-500/30"}>
          <div className="flex items-center gap-1">
            <FaLightbulb className="text-xl text-yellow-500" />
            <p className="font-semibold">Pro Tips</p>
          </div>
          <div className="flex flex-col">text</div>
        </Card>
      </div>
    </Card>
  );
};

export default ResumeInsights;
