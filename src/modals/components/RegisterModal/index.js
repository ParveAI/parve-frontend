import { useState } from "react";
import { useFormik } from "formik";
import { toast } from "react-hot-toast";
import { useRouter } from "next/router";

import { AuthServices } from "@/services";
import { useModal } from "@/context/ModalContext";

import FormLayout from "@/shared/FormLayout";
import { PasswordInput, TextInput } from "@/shared/Input";
import { ButtonWithLoader, CloseButton } from "@/shared/Button";
import { RightArrow } from "@/components/icons";

export default function RegisterModal({ closeModal, ...props }) {
  return (
    <div className="glow relative w-[450px] rounded-xl bg-[#282828] text-white px-10 py-8 max-md:w-[88vw] max-md:py-9 max-md:px-7">
      <CloseButton onClick={closeModal} />
      <RegisterContent isModal={true} closeModal={closeModal} {...props} />
    </div>
  );
}

export const RegisterContent = ({ isModal, closeModal, ...props }) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const openModal = useModal((state) => state.openModal);

  const { values, handleSubmit, handleChange } = useFormik({
    initialValues: {
      username: "",
      fullname: "",
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
        username: values.username,
        fullname: values.fullname,
        email: values.email,
        password: values.password,
      })
        .then((result) => {
          if (result?.token) {
            toast.success("Registered successfully!");
            if (isModal) {
              openModal("Login", { values: { email: values.email } });
              return;
            }
            router.push("/login");
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
    <FormLayout>
      <form
        onSubmit={handleSubmit}
        className="w-full flex flex-col items-center justify-start gap-4"
      >
        <TextInput
          id="username"
          type={"text"}
          label={"Username"}
          placeholder={"alanturing"}
          value={values.username}
          onChange={handleChange}
          minLength="2"
          required
        />
        <TextInput
          id="fullname"
          type={"text"}
          label={"Full Name"}
          placeholder={"Alan Turing"}
          value={values.fullname}
          onChange={handleChange}
          minLength="2"
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
          minLength="6"
          required
        />
        <PasswordInput
          id="confirmPassword"
          label={"Confirm Password"}
          value={values.confirmPassword}
          onChange={handleChange}
          minLength="6"
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
        onClick={() => {
          if (isModal) {
            openModal("Login", { values: { email: values.email } });
            return;
          }
          router.push("/login");
        }}
      >
        You already have an account? <span className="text-white">Login</span>
      </button>
    </FormLayout>
  );
};
