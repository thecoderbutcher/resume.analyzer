import { useFormStore } from "../../../../store/useFormStore";
import { useLangStore } from "../../../../store/useLangStore";
import { extra } from "../../../../constants/language";
import { buttons } from "../../../../constants/language";
import { extraSchema } from "../../../../schemas/formSchema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import InputForm from "./InputForm";
import { FaGlobe, FaRegStarHalfStroke, FaRegNewspaper } from "react-icons/fa6";
import constants from "../../../../constants";
import { useCvStore } from "../../../../store/useCvStore";
import ToastMsg from "./ToastMsg";
import toast from "react-hot-toast";

const ExtraForm = () => {
  const { lang } = useLangStore();
  const { prevStep, data, updateData, updateResult } = useFormStore();
  const { setIsLoading, setIsGenerate } = useCvStore();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(extraSchema),
    defaultValues: data,
  });

  const onSubmit = (values) => {
    const newLanguage = { ...values };
    const newData = {
      ...data,
      language: [...data.language, newLanguage],
    };
    updateData(newData);
    toast(extra[lang].toast);
    reset();
  };

  const generateResume = async () => {
    setIsLoading(true);
    const jobPropuse = document.getElementById("jobPropuse").value;
    const payload = {
      personal: {
        fullname: data.fullname.cap,
        position: data.position,
        phone: data.phone,
        email: data.email,
        web: data.web,
        github: data.github,
        linkedin: data.linkedin,
      },
      experience: data.experience ?? [],
      education: data.education ?? [],
      languages: data.language ?? [],
      jobProposal: jobPropuse ?? "",
    };

    const prompt = constants.CREATE_RESUME_PROMPT.replace(
      "{{PAYLOAD}}",
      JSON.stringify(payload, null, 2),
    );

    const response = await window.puter.ai.chat(
      [
        {
          role: "system",
          content:
            "You are an expert resume builder optimized for ATS (Applicant Tracking Systems)...",
        },
        { role: "user", content: prompt },
      ],
      { model: "gpt-5-nano" },
    );

    try {
      updateResult(response.message.content);
      setIsGenerate(true);
    } catch (err) {
      alert(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="flex flex-col space-y-4">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-4"
        >
          <h2 className="text-xl">{extra[lang].title}</h2>
          <ToastMsg />
          <InputForm
            error={errors.language}
            errormessage={extra[lang].errorLanguage}
            Icon={FaGlobe}
          >
            <input
              {...register("language")}
              className="w-full outline-none"
              type="text"
              placeholder={extra[lang].language}
            />
          </InputForm>
          <InputForm
            error={errors.level}
            errormessage={extra[lang].errorLevel}
            Icon={FaRegStarHalfStroke}
          >
            <input
              {...register("level")}
              className="w-full outline-none"
              type="text"
              placeholder={extra[lang].level}
            />
          </InputForm>
          <button className="bg-blue-600/50 hover:bg-blue-600 rounded-md py-1">
            {buttons[lang].add}
          </button>
        </form>
        <h2 className="text-xl">{extra[lang].title2}</h2>
        <InputForm Icon={FaRegNewspaper}>
          <textarea
            id="jobPropuse"
            rows={4}
            className="w-full outline-none resize-none"
            placeholder={extra[lang].description}
          ></textarea>
        </InputForm>
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
          type="submit"
          onClick={generateResume}
        >
          {buttons[lang].generate}
        </button>
      </div>
    </>
  );
};

export default ExtraForm;
