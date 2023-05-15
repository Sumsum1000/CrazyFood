import { create } from "zustand";

export const authStore = create((set) => ({
  logedIn: {
    isLogedIn: false,
    userName: "guest",
    token: "",
  },
  setLogin: (isLogedIn) => {
    set((state) => ({ isLogedIn: isLogedIn }));
  },
  setUserName: (name) => {
    set((state) => ({ userName: name }));
  },
  setToken: (token) => {
    set((state) => ({ token: token }));
  },
}));
