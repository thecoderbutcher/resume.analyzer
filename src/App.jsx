import { useState, useEffect } from "react";
import LoadingResume from "./components/LoadingResume";

import { Result } from "./components/Result";
import Title from "./components/Title";
import UploadResume from "./components/UploadResume";

function App() {
  const [aiReady, setAiReady] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [uploadedFile, setUploadedFile] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (window.puter?.ai?.chat) {
        setAiReady(true);
        clearInterval(interval);
      }
    }, 300);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="flex flex-col p-8 items-center justify-center min-h-screen">
      <Title />
      {!uploadedFile && <UploadResume />}
      {isLoading && <LoadingResume />}
      {uploadedFile && <Result />}
    </main>
  );
}

export default App;
