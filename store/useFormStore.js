import { create } from "zustand";

export const useFormStore = create((set) => ({
  step: 1,
  data: {
    name: "",
    lastname: "",
  },
  nextStep: () => set((state) => ({ step: state.step + 1 })),
  prevStep: () => set((state) => ({ step: state.step - 1 })),

  updateData: (newData) =>
    set((state) => ({ data: { ...state.data, ...newData } })),

  reset: () => set({ step: 1, data: {} }),
}));
