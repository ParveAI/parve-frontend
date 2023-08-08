import { create } from "zustand";

const isWindow = typeof window !== "undefined";

export const useAuth = create((set) => ({
  isLoggedIn: isWindow ? localStorage.getItem("_isLoggedIn") || false : false,
  user: isWindow ? JSON.parse(localStorage.getItem("_user")) || [] : [],
  token: isWindow ? localStorage.getItem("_token") || "" : "",
  setIsLoggedIn: (isLoggedIn) => {
    isWindow && localStorage.setItem("_isLoggedIn", isLoggedIn);
    set({ isLoggedIn });
  },
  setToken: (token) => {
    isWindow && localStorage.setItem("_token", token);
    set({ token, isLoggedIn: true });
  },
  setUser: (user) => {
    isWindow && localStorage.setItem("_user", JSON.stringify(user));
    set({ user, isLoggedIn: true });
  },
  login: (user, token) => {
    isWindow && localStorage.setItem("_user", JSON.stringify(user));
    isWindow && localStorage.setItem("_token", token);
    isWindow && localStorage.setItem("_isLoggedIn", true);
    set({ user, token, isLoggedIn: true });
  },
  logout: () => {
    if (isWindow) {
      localStorage.removeItem("_isLoggedIn");
      localStorage.removeItem("_user");
      localStorage.removeItem("_token");
    }
    set({ user: [], token: "", isLoggedIn: false });
  },
}));
