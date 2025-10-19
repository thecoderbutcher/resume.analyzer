import { useState } from "react";
import { LangContext } from "./LangContext";

// 2. Crear el proveedor
export function LanguageProvider({ children }) {
  const [lang, setLang] = useState("es");

  // Cambiar el tema
  const toggleLang = () => {
    setLang((prev) => (prev === "es" ? "dark" : "es"));
  };

  // 3. Pasar valores al Provider
  return (
    <ThemeContext.Provider value={{ lang, toggleLang }}>
      {children}
    </ThemeContext.Provider>
  );
}
