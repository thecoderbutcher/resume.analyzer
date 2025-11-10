import { useFormStore } from "../../../../store/useFormStore";
import { useLangStore } from "../../../../store/useLangStore";
import { education } from "../../../../constants/language";
import { buttons } from "../../../../constants/language";

const EducationForm = () => {
  const { nextStep, prevStep } = useFormStore();
  const { lang } = useLangStore();
  return (
    <div>
      <div className="flex flex-col space-y-4">
        <h2>{education[lang].title}</h2>
        <input type="text" placeholder={education[lang].certification} />
        <input type="text" placeholder={education[lang].institution} />
        <input type="text" placeholder={education[lang].state} />
        <textarea
          name=""
          id=""
          placeholder={education[lang].description}
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
    </div>
  );
};

export default EducationForm;
