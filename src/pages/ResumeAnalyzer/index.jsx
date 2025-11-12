import { useEffect } from "react";
import { useCvStore } from "../../../store/useCvStore";
import UploadResume from "./components/UploadResume";
import Loading from "../../components/Loading";
import Result from "./components/Result";
import Title from "../../components/Title";
import { useLangStore } from "../../../store/useLangStore";
import { analizerTitle } from "../../../constants/language";
import { loadingResume } from "../../../constants/language";

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
      {isLoading && (
        <Loading
          title={loadingResume[lang].title}
          description={loadingResume[lang].description}
        />
      )}
      {uploadedFile && !isLoading && <Result />}
    </div>
  );
};

export default ResumeAnalyzer;
