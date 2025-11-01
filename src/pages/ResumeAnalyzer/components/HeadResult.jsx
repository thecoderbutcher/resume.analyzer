import Card from "../../../components/Card";
import { IoDocumentTextSharp } from "react-icons/io5";
import { MdSync } from "react-icons/md";
import { useCvStore } from "../../../../store/useCvStore";
import { useLangStore } from "../../../../store/useLangStore";
import { headResult } from "../../../../constants/language";

const HeadResult = () => {
  const { reset, uploadedFile } = useCvStore();
  const { lang } = useLangStore();
  return (
    <Card>
      <div className="flex justify-between items-center">
        <div className="flex gap-4 items-center justify-center">
          <IoDocumentTextSharp className="text-6xl p-2 bg-gradient-to-b from-blue-500 to-cyan-500 border-blue-500 rounded-lg" />
          <div className="flex flex-col">
            <h3 className="text-xl font-bold text-green-500">
              {headResult[lang].title}
            </h3>
            <p className="text-slate-500 text-sm break-all">
              {uploadedFile.name}
            </p>
          </div>
        </div>
        <button
          className="flex text-sm font-semibold p-2 gap-1 items-center bg-sky-600 px-2 rounded-lg shadow-md hover:shadow-slate-700 h-full"
          onClick={() => reset()}
        >
          <MdSync className="text-lg" /> {headResult[lang].button}
        </button>
      </div>
    </Card>
  );
};

export default HeadResult;
