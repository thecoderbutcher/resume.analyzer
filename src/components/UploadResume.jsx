import Card from "./Card";
import * as pdfjsLib from "pdfjs-dist";
import pdfjsWorker from "pdfjs-dist/build/pdf.worker.min?url";
import { MdOutlineDocumentScanner } from "react-icons/md";
import { useCvStore } from "../../store/useCvStore";
import constants, { buildPresenceChecklist } from "../../constants/Content";

pdfjsLib.GlobalWorkerOptions.workerSrc = pdfjsWorker;

const UploadResume = () => {
  const {
    aiReady,
    setUploadedFile,
    setIsLoading,
    setAnalysis,
    setResumeText,
    setPresenceChecklist,
    reset,
  } = useCvStore();

  const extractPDFText = async (file) => {
    const arrayBuffer = await file.arrayBuffer();

    const pdf = await pdfjsLib.getDocument({
      data: arrayBuffer,
    }).promise;

    // read all pages
    const texts = await Promise.all(
      Array.from({ length: pdf.numPages }, (_, i) =>
        pdf
          .getPage(i + 1)
          .then((page) =>
            page
              .getTextContent()
              .then((tc) => tc.items.map((i) => i.str).join(" ")),
          ),
      ),
    );
    return texts.join("\n").trim();
  };

  const parseJSONResponse = (reply) => {
    try {
      const match = reply.match(/\{[\s\S]*\}/);
      const parsed = match ? JSON.parse(match[0]) : {};

      if (!parsed.overallScore && !parsed.error)
        throw new Error("Invalid AI response");

      return parsed;
    } catch (err) {
      throw new Error(`Failed to parse AI response: ${err.message}`);
    }
  };

  const analyzeResume = async (text) => {
    const prompt = constants.ANALYZE_RESUME_PROMPT.replace(
      "{{DOCUMENT_TEXT}}",
      text,
    );

    const response = await window.puter.ai.chat(
      [
        { role: "system", content: "You are an expert resume reviewer..." },
        { role: "user", content: prompt },
      ],
      {
        model: "gpt-5-nano",
      },
    );
    const result = parseJSONResponse(
      typeof response === "string" ? response : response.message?.content || "",
    );

    if (result.error) throw new Error(result.error);

    return result;
  };

  const hadleFileUpload = async (e) => {
    const file = e.target.files[0];

    if (!file || file.type !== "application/pdf")
      return alert("Please upload a PDF file only");

    setUploadedFile(file);
    setIsLoading(true);
    setAnalysis(null);
    setResumeText("");
    setPresenceChecklist([]);

    try {
      const text = await extractPDFText(file);
      setResumeText(text);
      setPresenceChecklist(buildPresenceChecklist(text));
      setAnalysis(await analyzeResume(text));
    } catch (err) {
      alert(`Error: ${err.message}`);
      reset();
    } finally {
      setIsLoading(false);
    }
  };
  console.log();
  return (
    <Card>
      <div className="flex flex-col justify-center items-center w-[500px] p-8 border-2 border-dashed border-slate-600 rounded-xl gap-2">
        <MdOutlineDocumentScanner className="text-6xl" />
        <h2 className="text-xl sm:text-2xl ">Upload Your Resume</h2>
        <p className="text-sm text-slate-500 font-light">
          PDF files only - Get instant analysis
        </p>
        <input
          type="file"
          accept="pdf"
          onChange={hadleFileUpload}
          disabled={!aiReady}
          className="hidden"
          id="file-upload"
        />
        <label
          htmlFor="file-upload"
          className={`p-2 font-semibold bg-gradient-to-b from-sky-400 via-sky-600 to-sky-800 rounded-lg shadow-lg hover:shadow-cyan-600 transition-all duration-300 ${
            !aiReady ? "opacity-50 " : "cursor-allowed"
          }
          `}
        >
          Choose PDF File
        </label>
      </div>
    </Card>
  );
};

export default UploadResume;
