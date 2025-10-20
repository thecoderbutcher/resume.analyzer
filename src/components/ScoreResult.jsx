import Card from "./Card";
import { GiTrophy } from "react-icons/gi";
import { GiStarFormation } from "react-icons/gi";

const ScoreResult = () => {
  return (
    <Card>
      <div className="flex flex-col items-center gap-2">
        <div className="flex gap-1 items-center text-3xl">
          <GiTrophy className="text-yellow-500 " />
          <h3 className="font-semibold">Overall Score</h3>
        </div>
        <p className=" font-semibold text-6xl text-blue-400">??/??</p>
        <div className="flex gap-1 border border-slate-600 p-2 items-center rounded-2xl">
          <GiStarFormation className="text-2xl text-yellow-500" />{" "}
          <span>result text</span>
        </div>
        <div
          style={{
            width: "90%",
          }}
          className="inline-flex items-center gap-2 mt-3 px-4 py-2 rounded-full border-1 bg-green-500/40 border-green-500/30"
        ></div>
        <p className="text-slate-500 text-sm font-light">
          Score based on content quality formatting, and keyboard usage
        </p>
      </div>
    </Card>
  );
};

export default ScoreResult;
