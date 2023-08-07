import { useState } from "react";
import { useModal } from "@/context/ModalContext";
import { useFormik } from "formik";

import FormLayout from "@/shared/FormLayout";
import { PasswordInput, TextInput } from "@/shared/Input";
import { Button } from "@/shared/Button";
import { Close, RightArrow } from "@/components/icons";
import { useAuth } from "@/context/AuthContext";

export default function LoginModal({ closeModal, ...props }) {
  const setToken = useAuth((state) => state.setToken);
  const setUser = useAuth((state) => state.setUser);
  const setIsLoggedIn = useAuth((state) => state.setIsLoggedIn);

  const openModal = useModal((state) => state.openModal);

  const { values, handleSubmit, handleChange } = useFormik({
    initialValues: {
      email: props?.values?.email ? props?.values?.email : "",
      password: "",
    },
    onSubmit: (values) => {
      var raw = {
        email: values.email,
        password: values.password,
      };

      var requestOptions = {
        method: "POST",
        body: JSON.stringify(raw),
        redirect: "follow",
      };

      fetch(
        "https://parve-backend.ahmetcanisik5458675.workers.dev/user/login",
        requestOptions
      )
        .then((response) => response.json())
        .then((result) => {
          setToken(result?.jwt);
          setUser(result?.user);
          setIsLoggedIn(true);
          console.log(result);
        })
        .catch((error) => console.log("error", error));
      // closeModal();
    },
  });

  return (
    <div className="relative w-[450px] rounded-xl bg-[#282828] text-white px-10 py-8 max-md:w-[88vw] max-md:py-9 max-md:px-7">
      <CloseButton onClick={closeModal} />
      <FormLayout>
        <form
          onSubmit={handleSubmit}
          className="w-full flex flex-col items-center justify-start gap-4"
        >
          <TextInput
            id="email"
            type={"email"}
            label={"Email"}
            placeholder={"alan.turing@example.com"}
            value={values.email}
            onChange={handleChange}
          />
          <PasswordInput
            id="password"
            label={"Password"}
            value={values.password}
            onChange={handleChange}
          />
          <Button title={"Sign In"} className="mt-3 w-full bg-black text-white">
            <RightArrow />
          </Button>
        </form>

        <button
          className="text-sm text-white/60"
          onClick={() => openModal("Register", { values })}
        >
          Don't have an account? <span className="text-white">Register</span>
          <br />
          {/* <div className="w-full px-4 py-3 bg-red-900 text-white rounded-md mt-5">
          {JSON.stringify(values, null, 2)}
          </div> */}
        </button>
      </FormLayout>
    </div>
  );
}

const CloseButton = (props) => {
  return (
    <div
      {...props}
      className="absolute top-4 right-4 w-8 h-8 cursor-pointer bg-black rounded-full flex items-center justify-center transition-colors hover:bg-[#181818]"
    >
      <Close className="scale-90" fill="white" />
    </div>
  );
};
