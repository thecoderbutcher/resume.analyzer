import { useEffect } from "react";
import { useCvStore } from "../../../store/useCvStore";
import Title from "./components/Title";
import UploadResume from "./components/UploadResume";
import LoadingResume from "./components/LoadingResume";
import Result from "./components/Result";

const ResumeAnalyzer = () => {
  const { setAIReady, isLoading, uploadedFile } = useCvStore();

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
    <>
      <Title />
      {!uploadedFile && <UploadResume />}
      {isLoading && <LoadingResume />}
      {uploadedFile && !isLoading && <Result />}
    </>
  );
};

export default ResumeAnalyzer;
