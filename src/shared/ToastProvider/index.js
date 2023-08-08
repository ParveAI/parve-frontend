import React from "react";
import { Toaster } from "react-hot-toast";

const ToastProvider = ({ children }) => {
  return (
    <>
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
      {children}
    </>
  );
};

export default ToastProvider;
