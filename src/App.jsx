import Title from "./components/Title"
import UploadReseume from "./components/UploadReseume"

function App() {

  return (
    <main className="flex flex-col w-screen h-screen bg-gray-900 items-center justify-center text-slate-400">
      <Title/>
      <UploadReseume />
    </main>
  )
}

export default App

