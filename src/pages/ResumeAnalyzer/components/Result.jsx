import ATSOptimization from "./ATSOptimization";
import DetailsFeedback from "./DetailsFeedback";
import ExecutiveSummary from "./ExecutiveSummary";
import HeadResult from "./HeadResult";
import PerformanceMetric from "./PerformanceMetric";
import RecommendedKeywords from "./RecommendedKeywords";
import ResumeInsights from "./ResumeInsights";
import ScoreResult from "./ScoreResult";

const Result = () => {
  return (
    <div className="flex flex-col gap-4 max-w-5xl mx-auto w-full">
      <HeadResult />
      <ScoreResult />
      <ExecutiveSummary />
      <DetailsFeedback />
      <PerformanceMetric />
      <ResumeInsights />
      <ATSOptimization />
      <RecommendedKeywords />
    </div>
  );
};

export default Result;
