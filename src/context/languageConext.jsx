import { createContext, useState } from "react";

export const LangContext = createContext(null);

export function LangProvider({ children }) {
  let lacaleLanguage = localStorage.getItem("lang") || "uz";

  const [language, setLanguage] = useState(lacaleLanguage);

  return (
    <LangContext.Provider value={{ language, setLanguage }}>
      {children}
    </LangContext.Provider>
  );
}