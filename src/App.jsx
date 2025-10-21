import { useEffect } from "react";
import { useCvStore } from "../store/useCvStore";
import LoadingResume from "./components/LoadingResume";
import Result from "./components/Result";
import Title from "./components/Title";
import UploadResume from "./components/UploadResume";

function App() {
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
    <main className="flex flex-col p-8 items-center justify-center min-h-screen transition-all duration-300">
      <Title />
      {!uploadedFile && <UploadResume />}
      {isLoading && <LoadingResume />}
      {uploadedFile && !isLoading && <Result />}
    </main>
  );
}

export default App;
