import { post } from "./request";

export const imageToText = (data) =>
  post("/image/toText", data, "JSON", {
    "Content-Type": "image/png",
  });
