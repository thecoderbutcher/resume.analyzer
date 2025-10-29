import { create } from "zustand";

export const useLangStore = create((set) => ({
  lang: localStorage.getItem("ra_lang") || "en",

  setLang: (newLang) => {
    localStorage.setItem("ra_lang", newLang);
    set({ lang: newLang });
  },
}));
