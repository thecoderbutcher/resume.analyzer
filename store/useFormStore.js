import { create } from "zustand";

export const useFormStore = create((set) => ({
  step: 1,
  data: {
    fullname: "",
    position: "",
    phone: "",
    email: "",
    web: "",
    github: "",
    linkedin: "",
  },
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

  reset: () => set({ step: 1, data: {} }),
}));
