import { post } from "./request";

export const imageToText = (data) =>
  post("/image/toText", data, "FORM-DATA", {
    "Content-Type": "image/*",
  });
