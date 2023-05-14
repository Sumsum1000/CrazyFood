import { create } from "zustand";

export const authStore = create((set) => ({
  logedIn: {
    isLogedIn: false,
    userName: "guest",
  },
  setLogin: (isLogedIn) => {
    set((state) => ({ isLogedIn: isLogedIn }));
  },
  setUserName: (name) => {
    set((state) => ({ userName: name }));
  },
}));
