import Card from "./Card";
import { FaChartSimple } from "react-icons/fa6";
const PerformanceMetric = () => {
  return (
    <Card>
      <div className="flex gap-1 mb-4 items-center">
        <div className="bg-cyan-500/30 p-2 rounded-full">
          <FaChartSimple className="text-xl" />
        </div>
        <p className="text-lg">ExecutiveSummary</p>
      </div>
      <div className="bg-slate-600/30 border border-slate-400/30 rounded-lg p-4">
        text
      </div>
    </Card>
  );
};

export default PerformanceMetric;
