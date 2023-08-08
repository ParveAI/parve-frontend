import { useState } from "react";
import { useModal } from "@/context/ModalContext";
import { useFormik } from "formik";
import { toast } from "react-hot-toast";

import { AuthServices } from "@/services";
import { useAuth } from "@/context/AuthContext";

import FormLayout from "@/shared/FormLayout";
import { PasswordInput, TextInput } from "@/shared/Input";
import { ButtonWithLoader, CloseButton } from "@/shared/Button";
import { RightArrow } from "@/components/icons";
import { useRouter } from "next/router";

export default function LoginModal({ closeModal, ...props }) {
  return (
    <div className="relative w-[450px] rounded-xl bg-[#282828] text-white px-10 py-8 max-md:w-[88vw] max-md:py-9 max-md:px-7">
      <CloseButton onClick={closeModal} />
      <LoginContent isModal={true} closeModal={closeModal} {...props} />
    </div>
  );
}

export const LoginContent = ({ isModal, closeModal, ...props }) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const login = useAuth((state) => state.login);
  const openModal = useModal((state) => state.openModal);

  const { values, handleSubmit, handleChange } = useFormik({
    initialValues: {
      email: props?.values?.email ? props?.values?.email : "",
      password: "",
    },
    onSubmit: (values) => {
      setIsLoading(true);
      AuthServices.login(values)
        .then((result) => {
          if (result?.error) {
            toast.error(result?.error);
            return;
          }
          if (result?.jwt) {
            login(result?.user, result?.jwt);
            toast.success("Logged in successfully!");
            if (isModal) {
              closeModal();
            } else {
              router.push("/");
            }
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
          required
        />
        <ButtonWithLoader
          type="submit"
          title={"Sign In"}
          isLoading={isLoading}
          className="mt-3 w-full bg-black text-white"
        >
          <RightArrow />
        </ButtonWithLoader>
      </form>
      <button
        className="text-sm text-white/60"
        onClick={() => {
          if (isModal) {
            openModal("Register", { values: { email: values.email } });
          } else {
            router.push("/register");
          }
        }}
      >
        Don't have an account? <span className="text-white">Register</span>
        <br />
      </button>
    </FormLayout>
  );
};
