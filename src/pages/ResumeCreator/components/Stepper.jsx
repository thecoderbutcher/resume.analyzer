import { stepper } from "../../../../constants/language";
import { useLangStore } from "../../../../store/useLangStore";

const Stepper = ({ currentStep }) => {
  const { lang } = useLangStore();

  return (
    <div className="flex justify-between items-center">
      {stepper[lang].map((label, index) => {
        const stepNumber = index + 1;
        const isActive = stepNumber === currentStep;
        const isComplete = stepNumber < currentStep;

        return (
          <div
            key={label}
            className="flex flex-col items-center flex-1 relative"
          >
            <div
              className={`w-8 h-8 rounded-full z-10 flex items-center justify-center ${isActive ? "bg-gradient-to-b from-blue-500 to-cyan-500 border-blue-500" : isComplete ? "bg-green-600" : "bg-gray-500"}`}
            >
              {isComplete ? "✓" : stepNumber}
            </div>
            <p
              className={`text-sm mt-2 ${isActive ? "font-semibold text-blue-400" : "text-gray-500"}`}
            >
              {label}
            </p>
            {index < stepper[lang].length - 1 && (
              <div
                className={`absolute top-4 z-0 left-[60%] right-[-40%] h-0.5 ${isComplete ? "bg-green-700" : "bg-gray-400"}`}
              ></div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Stepper;
