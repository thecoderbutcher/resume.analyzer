import DetailsFeedback from "./DetailsFeedback";
import ExecutiveSummary from "./ExecutiveSummary";
import HeadResult from "./HeadResult";
import PerformanceMetric from "./PerformanceMetric";
import ScoreResult from "./ScoreResult";

export const Result = () => {
  return (
    <div className="flex flex-col gap-4 max-w-5xl mx-auto w-full">
      <HeadResult />
      <ScoreResult />
      <ExecutiveSummary />
      <DetailsFeedback />
      <PerformanceMetric />
    </div>
  );
};
