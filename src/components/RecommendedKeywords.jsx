import { FaKey } from "react-icons/fa";
import Card from "./Card";

const RecommendedKeywords = () => {
  return (
    <Card>
      <div className="flex gap-1 mb-4 items-center">
        <div className="bg-blue-500/30 p-2 rounded-full">
          <FaKey className="text-xl" />
        </div>
        <p className="text-lg">Recommended Keywords</p>
      </div>
    </Card>
  );
};

export default RecommendedKeywords;
