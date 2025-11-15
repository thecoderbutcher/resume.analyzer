import { buttons } from "../../../../constants/language";
import { useFormStore } from "../../../../store/useFormStore";
import { useLangStore } from "../../../../store/useLangStore";

const ControlButtons = () => {
  const { prevStep, nextStep, step } = useFormStore();
  const { lang } = useLangStore();
  return (
    <div className={`flex  ${step === 1 ? "justify-end" : "justify-between"}`}>
      {step !== 1 && (
        <button
          onClick={() => prevStep()}
          className="px-2 py-1 bg-blue-500/50 rounded-md hover:bg-blue-500 transition-all duration-200"
        >
          {buttons[lang].prev}
        </button>
      )}

      {step !== 4 && (
        <button
          onClick={() => nextStep()}
          className="px-2 py-1 bg-blue-500/50 rounded-md hover:bg-blue-500 transition-all duration-200"
          type="submit"
        >
          {buttons[lang].next}
        </button>
      )}
    </div>
  );
};

export default ControlButtons;
