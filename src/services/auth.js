import { post, get } from "./request";

export const register = (data) => post("/user/signup", data, "JSON");
export const login = (data) => post("/user/login", data);
export const getProfileByUsername = (username) => get(`/profile/${username}`);
