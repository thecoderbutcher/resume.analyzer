import { useFormStore } from "../../../../store/useFormStore";

const ControlButtons = () => {
  const { prevStep, nextStep, step } = useFormStore();
  return (
    <div className={`flex  ${step === 1 ? "justify-end" : "justify-between"}`}>
      {step !== 1 && (
        <button onClick={prevStep} className="px-4 py-2 ">
          Atras
        </button>
      )}

      {step !== 4 && (
        <button onClick={nextStep} className="px-4 py-2" type="submit">
          siguiente
        </button>
      )}
    </div>
  );
};

export default ControlButtons;
