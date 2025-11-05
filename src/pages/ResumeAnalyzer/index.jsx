import { useEffect } from "react";
import { useCvStore } from "../../../store/useCvStore";
import UploadResume from "./components/UploadResume";
import LoadingResume from "./components/LoadingResume";
import Result from "./components/Result";
import Title from "../../components/Title";
import { useLangStore } from "../../../store/useLangStore";
import { analizerTitle } from "../../../constants/language";

const ResumeAnalyzer = () => {
  const { setAIReady, isLoading, uploadedFile } = useCvStore();
  const { lang } = useLangStore();

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
    <div className="flex flex-col">
      <Title
        title={analizerTitle[lang].title}
        subtitle={analizerTitle[lang].subtitle}
      />
      {!uploadedFile && <UploadResume />}
      {isLoading && <LoadingResume />}
      {uploadedFile && !isLoading && <Result />}
    </div>
  );
};

export default ResumeAnalyzer;
