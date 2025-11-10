import { useFormStore } from "../../../../store/useFormStore";
import { useLangStore } from "../../../../store/useLangStore";
import { experience } from "../../../../constants/language";
import { buttons } from "../../../../constants/language";
import InputForm from "./InputForm";

const ExperienceForm = () => {
  const { nextStep, prevStep } = useFormStore();
  const { lang } = useLangStore();

  return (
    <form>
      <div className="flex flex-col space-y-4">
        <h2 className="text-xl">{experience[lang].title}</h2>

        <input type="text" placeholder={experience[lang].role} />

        <input type="date" placeholder={experience[lang].startDate} />
        <input type="date" placeholder={experience[lang].title} />
        <input type="text" placeholder={experience[lang].company} />
        <textarea
          name=""
          id=""
          placeholder={experience[lang].description}
        ></textarea>
        <button>{buttons[lang].add}</button>
      </div>
      <div className="flex justify-between pt-8">
        <button
          className="px-2 py-1 bg-blue-500/50 rounded-md hover:bg-blue-500 transition-all duration-200"
          onClick={() => prevStep()}
        >
          {buttons[lang].prev}
        </button>
        <button
          className="px-2 py-1 bg-blue-500/50 rounded-md hover:bg-blue-500 transition-all duration-200"
          onClick={() => nextStep()}
        >
          {buttons[lang].next}
        </button>
      </div>
    </form>
  );
};

export default ExperienceForm;
