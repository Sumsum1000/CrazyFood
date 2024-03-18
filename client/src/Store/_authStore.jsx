import { create } from "zustand";

// export const authStore = create((set) => ({
//   logedIn: {
//     isLogedIn: false,
//     userName: "guest",
//     token: "",
//     userId: "",
//   },
//   setLogin: (isLogedIn) => {
//     set((state) => ({ logedIn: { ...state.logedIn, isLogedIn: isLogedIn } }));
//   },
//   setUserName: (name) => {
//     set((state) => ({ logedIn: { ...state.logedIn, userName: name } }));
//   },
//   setToken: (token) => {
//     set((state) => ({ logedIn: { ...state.logedIn, token: token } }));
//   },
//   setUserId: (userId) => {
//     set((state) => ({ logedIn: { ...state.logedIn, userId: userId } }));
//   },
// }));

export const authStore = create((set) => ({
  logedIn: {
    isLogedIn: false,
    userName: "guest",
    token: "",
    userId: "",
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
}));
