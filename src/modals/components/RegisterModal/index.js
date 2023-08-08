import { useState } from "react";
import { useFormik } from "formik";
import { toast } from "react-hot-toast";

import { AuthServices } from "@/services";
import { useAuth } from "@/context/AuthContext";
import { useModal } from "@/context/ModalContext";

import FormLayout from "@/shared/FormLayout";
import { PasswordInput, TextInput } from "@/shared/Input";
import { ButtonWithLoader } from "@/shared/Button";
import { Close, RightArrow } from "@/components/icons";

export default function RegisterModal({ closeModal, ...props }) {
  const [isLoading, setIsLoading] = useState(false);
  const openModal = useModal((state) => state.openModal);

  const { values, handleSubmit, handleChange } = useFormik({
    initialValues: {
      fullName: "",
      email: props?.values?.email ? props?.values?.email : "",
      password: "",
      confirmPassword: "",
    },
    onSubmit: (values) => {
      if (values.password !== values.confirmPassword) {
        toast.error("Passwords do not match!");
        return;
      }
      setIsLoading(true);
      AuthServices.register({
        fullName: values.fullName,
        email: values.email,
        password: values.password,
      })
        .then((result) => {
          if (result?.token) {
            toast.success("Registered successfully!");
            openModal("Login", { values: { email: values.email } });
          }
        })
        .catch((error) => {
          toast.error(error?.error?.message);
        })
        .finally(() => {
          setIsLoading(false);
        });
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
            id="fullName"
            type={"text"}
            label={"Full Name"}
            placeholder={"Alan Turing"}
            value={values.fullName}
            onChange={handleChange}
            minlength="2"
            required
          />
          <TextInput
            id="email"
            type={"email"}
            label={"Email"}
            placeholder={"alan.turing@example.com"}
            value={values.email}
            onChange={handleChange}
            required
          />
          <PasswordInput
            id="password"
            label={"Password"}
            value={values.password}
            onChange={handleChange}
            minlength="6"
            required
          />
          <PasswordInput
            id="confirmPassword"
            label={"Confirm Password"}
            value={values.confirmPassword}
            onChange={handleChange}
            minlength="6"
            required
          />
          <ButtonWithLoader
            isLoading={isLoading}
            title={"Register"}
            type="submit"
            className="mt-3 w-full bg-black text-white"
          >
            <RightArrow />
          </ButtonWithLoader>
        </form>
        <button
          type="button"
          className="text-sm text-white/60"
          onClick={() => openModal("Login", { values })}
        >
          You already have an account? <span className="text-white">Login</span>
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
