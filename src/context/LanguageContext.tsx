"use client";

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import he from "../languages/he.json";
import en from "../languages/en.json";
import ar from "../languages/ar.json";
import ru from "../languages/ru.json";

// Define available languages
export type LanguageCode = "he" | "en" | "ar" | "ru";
export type Direction = "rtl" | "ltr";
export type LanguageContent = typeof he;

interface LanguageContextType {
  language: LanguageContent;
  languageCode: LanguageCode;
  dir: Direction;
  setLanguage: (code: LanguageCode) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

interface LanguageProviderProps {
  children: ReactNode;
}

const languages: Record<LanguageCode, LanguageContent> = {
  he,
  en,
  ar,
  ru,
};

export const LanguageProvider: React.FC<LanguageProviderProps> = ({
  children,
}) => {
  const [languageCode, setLanguageCode] = useState<LanguageCode>("he");
  const [language, setLanguage] = useState<LanguageContent>(he);
  const [dir, setDir] = useState<Direction>("rtl");

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.dir = dir;
      document.documentElement.lang = languageCode;
    }
  }, [dir, languageCode]);

  const handleSetLanguage = (code: LanguageCode) => {
    setLanguageCode(code);
    setLanguage(languages[code]);
    const newDir = code === "he" || code === "ar" ? "rtl" : "ltr";
    setDir(newDir);
    // document update handled by useEffect
  };

  return (
    <LanguageContext.Provider
      value={{ language, languageCode, dir, setLanguage: handleSetLanguage }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
