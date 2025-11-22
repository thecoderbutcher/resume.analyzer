import { useFormStore } from "../../../store/useFormStore";
import { useLangStore } from "../../../store/useLangStore";
import Card from "../../components/Card";
import Title from "../../components/Title";
import Stepper from "./components/Stepper";
import { creatorTitle } from "../../../constants/language";
import PersonalForm from "./components/PersonalForm";
import ExperienceForm from "./components/ExperienceForm";
import EducationForm from "./components/EducationForm";
import ExtraForm from "./components/ExtraForm";
import { useEffect } from "react";
import { useCvStore } from "../../../store/useCvStore";
import Loading from "../../components/Loading";
import { loadingCreate } from "../../../constants/language";
import GeneratePdf from "./components/GeneratePdf";
import { FaLightbulb } from "react-icons/fa6";

const ResumeCreator = () => {
  const { lang } = useLangStore();
  const { step } = useFormStore();
  const { setAIReady, isLoading, isGenerate } = useCvStore();
  useEffect(() => {
    const interval = setInterval(() => {
      if (window.puter?.ai?.chat) {
        setAIReady(true);
        clearInterval(interval);
      }
    }, 300);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="px-2">
      <Title
        title={creatorTitle[lang].title}
        subtitle={creatorTitle[lang].subtitle}
      />
      {isLoading && (
        <Loading
          title={loadingCreate[lang].title}
          description={loadingCreate[lang].description}
        />
      )}
      {!isLoading && !isGenerate && (
        <div className="flex flex-col gap-4">
          <Card>
            <Stepper currentStep={step} />
            <div className="flex flex-1 flex-col p-2 md:p-6">
              {step === 1 && <PersonalForm />}
              {step === 2 && <ExperienceForm />}
              {step === 3 && <EducationForm />}
              {step === 4 && <ExtraForm />}
            </div>
          </Card>
          <div className="flex gap-1 justify-center items-center text-sm font-extralight">
            <FaLightbulb className="text-amber-300" />
            <p>{creatorTitle[lang].tip}</p>
          </div>
        </div>
      )}
      {!isLoading && isGenerate && (
        <Card>
          <GeneratePdf />
        </Card>
      )}
    </div>
  );
};

export default ResumeCreator;
