import { useEffect } from "react";
import { useCvStore } from "../store/useCvStore";
import LoadingResume from "./components/LoadingResume";
import Result from "./components/Result";
import Title from "./components/Title";
import UploadResume from "./components/UploadResume";
import Navbar from "./components/Navbar";

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
    <main className="flex flex-col min-h-screen transition-all duration-300">
      <Navbar />
      <div className="flex flex-col grow-1 items-center justify-center">
        <Title />
        {!uploadedFile && <UploadResume />}
        {isLoading && <LoadingResume />}
        {uploadedFile && !isLoading && <Result />}
      </div>
    </main>
  );
}

export default App;
