
import LoadingResume from "./components/LoadingResume";
import { Result } from "./components/Result";
import Title from "./components/Title";
import UploadReseume from "./components/UploadResume";

function App() {
  return (
    <main className="flex flex-col w-screen h-screen bg-gray-900 items-center justify-center text-slate-400">
      <Title />
      <UploadReseume />
      <LoadingResume />
      <Result />
    </main>
  );
}

export default App;
