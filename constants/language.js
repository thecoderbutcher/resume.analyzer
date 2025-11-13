import SpanishIcon from "../src/assets/images/spanish.png";
import EnglishIcon from "../src/assets/images/english.png";
import logo from "../src/assets/images/logo.webp";

// Analyzer
export const images = {
  SpanishIcon,
  EnglishIcon,
  logo,
};

export const buttons = {
  es: {
    prev: "Anterior",
    next: "Siguiente",
    add: "Agregar",
    generate: "Generar",
  },
  en: { prev: "Prev", next: "Next", add: "Add", generate: "Generate" },
};

export const analizerTitle = {
  es: {
    title: "Analizador de Cv",
    subtitle:
      "Sube tu currículum en PDF y recibe comentarios instantáneos de IA.",
  },
  en: {
    title: "Resume Analyzer",
    subtitle: "Upload your PDF resume an get a instant AI feedback",
  },
};

export const uploadResume = {
  es: {
    title: "Sube tu currículum",
    description: "Solo archivos PDF: obtenga un análisis instantáneo",
    button: "Selecciona archivo PDF",
  },
  en: {
    title: "Upload Your Resume",
    description: "PDF files only - Get instant analysis",
    button: "Choose PDF File",
  },
};

export const loadingResume = {
  es: {
    title: "Analizando tu currículum",
    description: "Por favor, espera mientras IA revisa tu currículum.",
  },
  en: {
    title: "Analyzing Your Resume",
    description: "Please wait while IA reviews your resume.",
  },
};

export const headResult = {
  es: { title: "Análisis completado", button: "Nuevo análisis" },
  en: {
    title: "Analysis Complete",
    button: "New analysis",
  },
};

export const scoreResult = {
  es: {
    title: "Puntuación General",
    execellent: "Excelente",
    good: "Bueno",
    needsImprovements: "Necesita mejoras",
    text: "Puntuación basada en la calidad del contenido, el formato y el uso de palabras claves",
  },
  en: {
    title: "Overall Score",
    execellent: "Execellent",
    good: "Good",
    needsImprovements: "Needs Improvements",
    text: "Score based on content quality formatting, and keyword usage",
  },
};

export const executiveSummary = {
  es: {
    title: "Resumen ejecutivo",
  },
  en: { title: "Executive Summary" },
};

export const detailsFeedback = {
  es: {
    topStrengths: "Principales fortalezas",
    mainImporvents: "Mejoras principales",
  },
  en: { topStrengths: "Top Strengths", mainImporvents: "Main Improvements" },
};

export const performanceMetric = {
  es: {
    title: "Métricas de rendimiento",
    formatting: "Formato",
    contentQuality: "Calidad del contenido",
    atsCompatibility: "Compatibilidad con ATS",
    keywordUsage: "Uso de palabras clave",
    quantifiableAchievements: "Resultados cuantificados",
  },
  en: {
    title: "Performance Metric",
    formatting: "Formatting",
    contentQuality: "Content Quality",
    atsCompatibility: "ATS Compatibility",
    keywordUsage: "Keyword Usage",
    quantifiableAchievements: "Quantified Results",
  },
};

export const resumeInsights = {
  es: {
    title: "Información clave para tu currículum",
    actionItems: "Acciones a seguir",
    proTips: "Consejos profesionales",
  },
  en: {
    title: "Resume Insights",
    actionItems: "Action Items",
    proTips: "Pro Tips",
  },
};

export const atsOptimization = {
  es: {
    title: "Optimización para ATS",
    whatis: "¿Qué es un ATS?",
    strongText:
      "Los Sistemas de Seguimiento de Candidatos (ATS, por sus siglas en inglés)",
    text: "son herramientas de software utilizadas por más del 75 % de las empresas para filtrar automáticamente los currículos antes de la revisión humana. Estos sistemas buscan palabras clave, formato adecuado y cualificaciones relevantes para clasificar a los candidatos. Si tu currículo no es compatible con ATS, es posible que nunca llegue a un reclutador.",
    compatibility: "Lista de verificación de compatibilidad con ATS",
    sectionHeadings: "Encabezados de sección estándar",
    contactInformation: "Información de contacto",
    keywordsSkills: "Palabras clave y habilidades",
    quantifiedAchievements: "Logros cuantificados",
    actionVerbs: "Verbos de acción",
    professionalExperience: "Experiencia profesional",
    educationSection: "Sección de educación",
  },
  en: {
    title: "ATS Optimization",
    whatis: "What is ATS?",
    strongText: "Applicant Tracking Systems (ATS)",
    text: "are software tools used by 75%+ of employers to automatically screen resumes before human review. These systems scan for keywords, proper formatting, and relevant qualifications to rank candidates. If your resume isn't ATS-Friendly, it may never reach a human recruiter.",
    compatibility: "ATS Compatibility Checklist",
    sectionHeadings: "Standard Section Headings",
    contactInformation: "Contact Information",
    keywordsSkills: "Keywords & Skills",
    quantifiedAchievements: "Quantified Achievements",
    actionVerbs: "Action Verbs",
    professionalExperience: "Professional Experience",
    educationSection: "Education Section",
  },
};

export const recommendedKeywords = {
  es: {
    title: "Palabras clave recomendadas",
    text: "Considera incorporar estas palabras clave de forma natural en tu currículum para mejorar la compatibilidad con los sistemas de seguimiento de candidatos (ATS) y aumentar tus posibilidades de captar la atención de los reclutadores.",
  },
  en: {
    title: "Recommended Keywords",
    text: "Consider incorporating these keywords naturally into your resume to improve ATS Compatibility and increase your chances of getting  notice by recruiters.",
  },
};

// Creator
export const loadingCreate = {
  es: {
    title: "Generando tu currículum",
    description: "Por favor, espera mientras IA genera tu currículum.",
  },
  en: {
    title: "Generating Your Resume",
    description: "Please wait while the AI ​​generates your resume.",
  },
};

export const creatorTitle = {
  es: {
    title: "Creador de Cv",
    subtitle:
      "Diseña un currículum inteligente, compatible con ATS y potenciado por IA. Descárgalo en formato PDF listo para enviar.",
  },
  en: {
    title: "Resume Creator",
    subtitle:
      "Design a smart, AI-enhanced resume fully compatible with ATS. Download it in a polished PDF format.",
  },
};

export const stepper = {
  es: ["Personal", "Experiencia", "Educación", "Extra"],
  en: ["Personal", "Experience", "Education", "Extra"],
};

export const personalInformation = {
  es: {
    title: "Datos Personales",
    fullnamePlaceholder: "Ingresa tu nombre y apellido completo",
    role: "Ingresa tu rol (opcional)",
    phone: "Ingresa tu número de teléfono",
    email: "Ingresa tu email",
    web: "Ingresa tu página web (opcional)",
    github: "Ingresa tu cuenta de github (opcional)",
    linkedin: "Ingresa tu perfil de linkedin (opcional)",
    fullnameError: "Nombre y apellido es obligatorio",
    phoneError: "Ingresar un telefono valido",
    emailError: "Ingresar un email valido",
    githubError: "error github",
  },
  en: {
    title: "Personal Data",
    fullnamePlaceholder: "Enter your full name",
    lastnamePlaceholder: "Enter your lastname",
    role: "Enter your role (optional)",
    phone: "Enter your phone number",
    email: "Enter your email address",
    web: "Enter your website (optional)",
    github: "Enter your Github account (optional)",
    linkedin: "Enter your LinkedIn profile (optional)",
    fullnameError: "First and last name is required",
    phoneError: "Enter a valid phone number",
    emailError: "Enter a valid email address",
    githubError: "error github",
  },
};

export const experience = {
  es: {
    title: "Experiencia",
    position: "Rol",
    startDate: "Fecha de inicio",
    endDate: "Fecha de finalización",
    company: "Empresa",
    description: "Descripción de las tareas realizadas (opcional)",
    button: "Agregar",
    errorRole: "Rol es obligatorio",
    errorCompany: "Debe ingresar el nombre de la empresa",
    errorStartDate: "Fecha de inicio es obligatorio",
    errorDate: "La fecha de inicio no puede ser mayor a la fecha de fin",
    toast: "Experiencia añadida con éxito",
  },
  en: {
    title: "Experience",
    position: "Role",
    startDate: "Start date",
    endDate: "End date",
    company: "Company",
    description: "Description of the tasks performed (optional)",
    button: "Add",
    errorRole: "Role is required",
    errorCompany: "You must enter the company name",
    errorStartDate: "Start date is required",
    errorDate: "The start date cannot be later than the end date",
    toast: "Experience added successfully",
  },
};

export const education = {
  es: {
    title: "Educación",
    title2: "Cursos",
    certification: "Título",
    institution: "Institución",
    state: "Estado",
    duration: "Cantidad de horas (optional)",
    description: "Descripción (optional)",
    errorCertification: "El titulo es obligatorio",
    errorInstitution: "Debe ingresar el nombre de la institución",
    errorState: "Ingrese el estado: Completo, En curso o Incompleto",
    errorHours: "Debe ingresar el número de horas válidas",
    toast: "Educación añadida con éxito.",
  },
  en: {
    title: "Education",
    title2: "Courses",
    certification: "Title",
    institution: "Institution",
    state: "State",
    duration: "Number of hours (optional)",
    description: "Description (optional)",
    errorCertification: "The degree is required",
    errorInstitution: "You must enter the name of the institution",
    errorState: "Enter the status: Complete, In Progress, or Incomplete",
    errorHours: "You must enter the valid number of hours",
    toast: "Successfully added education.",
  },
};
export const extra = {
  es: {
    title: "Idioma",
    language: "Idioma",
    level: "Nivel",
    title2: "Propuesta Laboral",
    description:
      "Añade propuesta de trabajo a la que deseas aplicar (opcional)",
    errorLanguage: "Debes introducir un idioma.",
    errorLevel: "El nivel es obligatorio",
    toast: "Idioma añadido exitosamente.",
  },
  en: {
    title: "Language",
    language: "Language",
    level: "Level",
    title2: "Job Proposal",
    description: "Add job proposal to which you wish to apply (optional)",
    errorLanguage: "You must enter a language.",
    errorLevel: "The level is mandatory",
    toast: "Successfully added language.",
  },
};

export const pdfGenerate = {
  es: {
    title: "¡Excelente trabajo! Tu CV ahora cumple con los estándares ATS.",
    subtitle: "Descárgalo y da el siguiente paso en tu carrera.",
    download: "Descargar",
    summary: "Resumen profesional",
    experience: "Experiencia laboral",
    education: "Educación",
    skills: "Habilidades",
    languages: "Idiomas",
  },
  en: {
    title: "Great job! Your resume now meets ATS standards.",
    subtitle: "Download it and take the next step in your career.",
    download: "Download",
    summary: "Professional Summary",
    experience: "Work Experience",
    education: "Education",
    skills: "Skills",
    languages: "Languages",
  },
};
