import { create } from "zustand";

export const useFormStore = create((set) => ({
  step: 1,
  data: {
    fullname: "",
    role: "",
    phone: "",
    email: "",
    web: "",
    github: "",
    linkedin: "",
    jobPropusal: "",
    experience: [],
    education: [],
    language: [],
  },
  result: {},
  nextStep: () =>
    set((state) =>
      state.step !== 4 ? { step: state.step + 1 } : { step: state.step },
    ),
  prevStep: () =>
    set((state) =>
      state.step !== 1 ? { step: state.step - 1 } : { step: state.step },
    ),

  updateData: (newData) =>
    set((state) => ({ data: { ...state.data, ...newData } })),

  updateResult: (newResult) => {
    set({ result: newResult });
  },

  reset: () => set({ step: 1, data: {} }),
}));
