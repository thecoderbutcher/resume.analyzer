import ResumeAnalyzer  from "../src/pages/ResumeAnalyzer";
import ResumeCreator  from "../src/pages/ResumeCreator";

export const ROUTES = [
  {
    path: "/",
    element: <ResumeAnalyzer />,
    label: { es: "Analizar Cv", en: "Analyze Resume" },
  },
  {
    path: "/creator",
    element: <ResumeCreator />,
    label: { es: "Crear Cv", en: "Create Resume" },
  },
];
