import { useFormStore } from "../../../store/useFormStore";
import { useLangStore } from "../../../store/useLangStore";
import Card from "../../components/Card";
import Title from "../../components/Title";
import Stepper from "./components/Stepper";
import { creatorTitle } from "../../../constants/language";
import PersonalForm from "./components/PersonalForm";
import ExperienceForm from "./components/ExperienceForm";
import EducationForm from "./components/EducationForm";
import CoursesForm from "./components/CoursesForm";
import ControlButtons from "./components/ControlButtons";

const ResumeCreator = () => {
  const { step } = useFormStore();
  const { lang } = useLangStore();

  return (
    <div className="px-2">
      <Title
        title={creatorTitle[lang].title}
        subtitle={creatorTitle[lang].subtitle}
      />
      <Card>
        <Stepper currentStep={step} />
        <div className="flex flex-col p-2 md:p-6">
          {step === 1 && <PersonalForm />}
          {step === 2 && <ExperienceForm />}
          {step === 3 && <EducationForm />}
          {step === 4 && <CoursesForm />}
        </div>
      </Card>
    </div>
  );
};

export default ResumeCreator;
