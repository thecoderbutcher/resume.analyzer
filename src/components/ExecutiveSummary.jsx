import Card from "./Card";
import { FaClipboard } from "react-icons/fa";
const ExecutiveSummary = () => {
  return (
    <Card>
      <div className="flex gap-1 mb-4 items-center">
        <div className="bg-violet-500/30 p-2 rounded-full">
          <FaClipboard className="text-xl" />
        </div>
        <p className="text-lg">ExecutiveSummary</p>
      </div>
      <div className="bg-slate-600/30 border border-slate-400/30 rounded-lg p-4">
        text
      </div>
    </Card>
  );
};

export default ExecutiveSummary;
