import Card from "./Card";
import { useCvStore } from "../../store/useCvStore";
import { FaChartSimple } from "react-icons/fa6";
import { METRIC_CONFIG } from "../../constants/Content";

const PerformanceMetric = () => {
  const { analysis } = useCvStore();
  return (
    <Card>
      <div className="flex gap-1 mb-4 items-center">
        <div className="bg-cyan-500/30 p-2 rounded-full">
          <FaChartSimple className="text-xl" />
        </div>
        <p className="text-lg">Performance Metric</p>
      </div>
      <div className="space-y-4 bg-slate-600/30 border border-slate-400/30 rounded-lg p-4">
        {METRIC_CONFIG.map((cfg, i) => {
          const value =
            analysis.performanceMetrics?.[cfg.key] ?? cfg.defaultValue;
          return (
            <div key={i}>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <span className="text-lg">{cfg.icon}</span>
                  <p className="text-slate-200 font-medium">{cfg.label}</p>
                </div>
                <span className="text-slate-300 font-bold">{value}/10</span>
              </div>

              <div className="h-3 rounded-2xl bg-slate-600/50 mx-auto">
                <div
                  className={`h-full bg-gradient-to-r ${cfg.colorClass} rounded-full transition-all duration-1000 ease-out group-hover:`}
                  style={{ width: `${(value / 10) * 100}%` }}
                ></div>
              </div>
            </div>
          );
        })}
      </div>
    </Card>
  );
};

export default PerformanceMetric;
