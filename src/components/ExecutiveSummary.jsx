import Card from "./Card";
import { useCvStore } from "../../store/useCvStore";
import { FaClipboard } from "react-icons/fa";

const ExecutiveSummary = () => {
  const { analysis } = useCvStore();
  return (
    <Card>
      <div className="flex gap-1 mb-4 items-center">
        <div className="bg-violet-500/30 p-2 rounded-full">
          <FaClipboard className="text-xl" />
        </div>
        <p className="text-lg">Executive Summary</p>
      </div>
      <div className="bg-slate-600/30 border border-slate-400/30 rounded-lg p-4">
        {analysis.summary}
      </div>
    </Card>
  );
};

export default ExecutiveSummary;
