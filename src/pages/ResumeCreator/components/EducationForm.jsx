import { useFormStore } from "../../../../store/useFormStore";

const EducationForm = () => {
  const { nextStep, prevStep } = useFormStore();
  return (
    <div>
      <div className="flex flex-col space-y-4">
        <h2>Cursos</h2>
        <input type="text" placeholder="titulo" />
        <input type="text" placeholder="institucion" />
        <input type="text" placeholder="estado" />
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

export default EducationForm;
