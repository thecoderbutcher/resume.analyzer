import { FaFilePdf } from "react-icons/fa6";
import { pdfGenerate } from "../../../../constants/language";
import { useLangStore } from "../../../../store/useLangStore";
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
import { useFormStore } from "../../../../store/useFormStore";

const GeneratePdf = () => {
  const { lang } = useLangStore();
  const { data, result } = useFormStore();
  const dataCvIa = JSON.parse(result);
  const capitalize = (text) => text.replace(/\b\w/g, (l) => l.toUpperCase());

  const experienceContent = dataCvIa.experience.map((exp) => {
    return [
      {
        text: `${exp.role} · ${exp.company}`,
        style: "textPrimary",
      },
      {
        text: `${exp.startDay} · ${exp.endDay || "Actualidad"}`,
        style: "textSecondary",
      },
      {
        text: `${exp.taskDescription.split(",").map((task) => task)}`,
        style: "textNormal",
      },
    ];
  });

  const educationContent = dataCvIa.education.map((edu) => {
    return [
      { text: `${edu.title}`, style: "textPrimary" },
      {
        text: `${capitalize(edu.institution)} · ${edu.state}  ${edu.hours > 0 ? " · " + edu.hours + "hs" : ""}`,
        style: "textSecondary",
      },
      { text: `${edu.description}`, style: "textNormal" },
    ];
  });

  const languagesContent = dataCvIa.languages.map((language) => {
    return [
      {
        text: `${language.language} · ${language.level}`,
        style: "textPrimary",
      },
    ];
  });

  const skillsContent = dataCvIa.skills.map((skill) => {
    return [{ text: `- ${skill}`, style: "textPrimary" }];
  });

  const generatePdf = () => {
    const docDefinition = {
      pageSize: "A4",
      pageMargins: [20, 20, 20, 20],
      content: [
        { text: capitalize(data.fullname), style: "header" },
        { text: capitalize(data.role), style: "subheader" },
        { text: `${data.email} · ${data.phone}`, style: "contact" },
        {
          text: `${data.web ? data.web.toLowerCase() + " · " : ""}  ${data.linkedin ? data.linkedin.toLowerCase() + " · " : ""}  ${data.github ? data.github.toLowerCase() : ""}`,
          style: "contact",
        },
        {
          canvas: [
            {
              type: "line",
              x1: 0,
              y1: 0,
              x2: 550,
              y2: 0,
              lineWidth: 0.5,
              lineColor: "#333",
            },
          ],
          margin: [0, 4],
        },
        { text: pdfGenerate[lang].summary, style: "section" },
        { text: dataCvIa.professionalSummary, style: "textNormal" },
        {
          canvas: [
            {
              type: "line",
              x1: 0,
              y1: 0,
              x2: 550,
              y2: 0,
              lineWidth: 0.5,
              lineColor: "#333",
            },
          ],
          margin: [0, 4],
        },
        { text: pdfGenerate[lang].experience, style: "section" },
        ...experienceContent.flat(),
        {
          canvas: [
            {
              type: "line",
              x1: 0,
              y1: 0,
              x2: 550,
              y2: 0,
              lineWidth: 0.5,
              lineColor: "#333",
            },
          ],
          margin: [0, 4],
        },
        { text: pdfGenerate[lang].education, style: "section" },
        ...educationContent.flat(),
        {
          canvas: [
            {
              type: "line",
              x1: 0,
              y1: 0,
              x2: 550,
              y2: 0,
              lineWidth: 0.5,
              lineColor: "#333",
            },
          ],
          margin: [0, 4],
        },
        { text: pdfGenerate[lang].languages, style: "section" },
        ...languagesContent.flat(),
        {
          canvas: [
            {
              type: "line",
              x1: 0,
              y1: 0,
              x2: 550,
              y2: 0,
              lineWidth: 0.5,
              lineColor: "#333",
            },
          ],
          margin: [0, 4],
        },
        { text: pdfGenerate[lang].skills, style: "section" },
        ...skillsContent.flat(),
      ],
      styles: {
        header: { fontSize: 18, bold: true, color: "#2b2b2b" },
        subheader: { fontSize: 14, margin: [0, 0, 0, 1], color: "#2b2b2b" },
        contact: { fontSize: 10, color: "#444" },
        section: { fontSize: 14, bold: true, margin: [0, 1], color: "#2b2b2b" },
        textPrimary: { fontSize: 12, color: "#2b2b2b", margin: [0, 2] },
        textSecondary: {
          fontSize: 10,
          color: "#2b2b2b",
          margin: [0, 2],
          italics: true,
        },
        textNormal: {
          fontSize: 11,
          color: "#2b2b2b",
          margin: [0, 2],
          alignment: "justify",
        },
      },
    };
    pdfMake
      .createPdf(docDefinition)
      .download(`${data.fullname}_${data.role}.pdf`);
  };
  
  return (
    <div className="flex flex-col gap-4 items-center justify-center">
      <h2 className="text-lg">{pdfGenerate[lang].title}</h2>
      <p className="font-light text-slate-400">{pdfGenerate[lang].subtitle}</p>
      <button
        className="flex items-center gap-1 font-semibold bg-gradient-to-b from-sky-400 via-sky-600 to-sky-800 px-2 py-1 rounded-md"
        onClick={generatePdf}
      >
        {pdfGenerate[lang].download}
        <FaFilePdf />
      </button>
    </div>
  );
};

export default GeneratePdf;
