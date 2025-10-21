import { create } from "zustand";

export const useCvStore = create((set) => ({
  aiReady: false,
  isLoading: false,
  uploadedFile: null,
  analysis: null,
  resumeText: "",
  presenceChecklist: [],

  setAIReady: (ready) => set({ aiReady: ready }),
  setIsLoading: (loading) => set({ isLoading: loading }),
  setUploadedFile: (file) => set({ uploadedFile: file }),
  setAnalysis: (data) => set({ analysis: data }),
  setResumeText: (text) => set({ resumeText: text }),
  setPresenceChecklist: (checklist) => set({ presenceChecklist: checklist }),

  reset: () =>
    set({  
      uploadedFile: null,
      analysis: null,
      resumeText: "",
      presenceChecklist: [],
    }),
}));
