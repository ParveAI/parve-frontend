import React from "react";
import { Toaster } from "react-hot-toast";

const ToastWrapper = () => {
  return (
    <Toaster
      position="bottom-center"
      reverseOrder={false}
      containerStyle={{
        zIndex: 9999999999,
      }}
      toastOptions={{
        style: {
          background: "#333",
          color: "#fff",
        },
      }}
    />
  );
};

export default ToastWrapper;
