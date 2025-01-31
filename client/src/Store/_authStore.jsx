import { create } from "zustand";

export const authStore = create((set) => ({
  logedIn: {
    isLogedIn: false,
    userName: "guest",
    token: "",
    userId: "",
    email: "",
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
  setUserId: (userId) => {
    set((state) => ({ userId: userId }));
  },
  setUEmail: (userEmail) => {
    set((state) => ({ email: userEmail }));
  },
}));
