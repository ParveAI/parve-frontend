import { create } from "zustand";

import { modals } from "@/modals/modals";

export const useModal = create((set) => ({
  modal: {
    name: "",
    props: {},
    isOpen: false,
  },
  openModal: (name, props) => {
    const modalExists = modals.find((m) => m.name === name);
    if (!modalExists) {
      console.error(`Modal ${name} does not exist`);
      return;
    }
    set(() => ({ modal: { name, props, isOpen: true } }));
  },
  closeModal: () => set(() => ({ modal: { name: "", isOpen: false } })),
}));
