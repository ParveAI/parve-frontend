import { create } from "zustand";

export const useAuth = create((set) => ({
  isLoggedIn: false,
  user: [],
  token: "",
  setIsLoggedIn: (isLoggedIn) => {
    set({ isLoggedIn });
  },
  setToken: (token) => {
    set({ token, isLoggedIn: true });
  },
  setUser: (user) => {
    set({ user, isLoggedIn: true });
  },
  logout: () => {
    set({ user: [], token: "", isLoggedIn: false });
  },
}));
