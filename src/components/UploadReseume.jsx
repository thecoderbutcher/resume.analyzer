import Card from "./Card";
import { MdOutlineDocumentScanner } from "react-icons/md";
const UploadReseume = () => {
  return (
    <Card>
      <div className="flex flex-col justify-center items-center w-[500px] p-8 border-2 border-dashed border-slate-600 rounded-xl gap-2">
        <MdOutlineDocumentScanner className="text-6xl"/>
        <h2 className="text-xl sm:text-2xl ">Upload Your Resume</h2>
        <p className="text-sm text-slate-500 font-light">PDF files only - Get instant analysis</p>
        <button className="p-2 font-semibold bg-gradient-to-b from-sky-400 via-sky-600 to-sky-800 rounded-lg shadow-lg hover:shadow-cyan-600 transition-all duration-300">Choose PDF File</button>
      </div>
    </Card>
  );
};

export default UploadReseume;
