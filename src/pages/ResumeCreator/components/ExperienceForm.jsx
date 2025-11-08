import { useFormStore } from "../../../../store/useFormStore";

const ExperienceForm = () => {
  const { nextStep, prevStep } = useFormStore();
  return (
    <div>
      <div className="flex flex-col space-y-4">
        <h2 className="text-xl">Experiencia</h2>
        <input type="text" placeholder="cargo" />
        <input type="date" placeholder="inicio" />
        <input type="date" placeholder="fin" />
        <input type="text" placeholder="rol" />
        <input type="text" placeholder="empresa" />
        <textarea name="" id="" placeholder="descripcion"></textarea>
        <button>Agregar mas</button>
      </div>
      <div className="flex justify-between pt-8">
        <button
          className="px-2 py-1 bg-blue-500/50 rounded-md hover:bg-blue-500 transition-all duration-200"
          onClick={() => prevStep()}
        >
          Atras
        </button>
        <button
          className="px-2 py-1 bg-blue-500/50 rounded-md hover:bg-blue-500 transition-all duration-200"
          onClick={() => nextStep()}
        >
          Siguiente
        </button>
      </div>
    </div>
  );
};

export default ExperienceForm;
