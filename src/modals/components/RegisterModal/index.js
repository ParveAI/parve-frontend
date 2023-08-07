import { useModal } from "@/context/ModalContext";
import { useFormik } from "formik";

import FormLayout from "@/shared/FormLayout";
import { PasswordInput, TextInput } from "@/shared/Input";
import { Button } from "@/shared/Button";
import { Close, RightArrow } from "@/components/icons";
import { useAuth } from "@/context/AuthContext";

export default function RegisterModal({ closeModal, ...props }) {
  const setUser = useAuth((state) => state.setUser);
  const setToken = useAuth((state) => state.setToken);
  const openModal = useModal((state) => state.openModal);

  const { values, handleSubmit, handleChange } = useFormik({
    initialValues: {
      fullName: "",
      email: props?.values?.email ? props?.values?.email : "",
      password: "",
      confirmPassword: "",
    },
    onSubmit: (values) => {
      var raw = {
        fullName: values?.fullName,
        email: values.email,
        password: values.password,
      };

      var requestOptions = {
        method: "POST",
        body: JSON.stringify(raw),
        redirect: "follow",
      };

      fetch(
        "https://parve-backend.ahmetcanisik5458675.workers.dev/user/signup",
        requestOptions
      )
        .then((response) => response.text())
        .then((result) => {
          console.log(result);
          closeModal();
        })
        .catch((error) => console.log("error", error));
      // alert(JSON.stringify(values, null, 2));
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
            id="fullName"
            type={"text"}
            label={"Full Name"}
            placeholder={"Alan Turing"}
            value={values.fullName}
            onChange={handleChange}
          />
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
          <PasswordInput
            id="confirmPassword"
            label={"Confirm Password"}
            value={values.confirmPassword}
            onChange={handleChange}
          />
          <Button
            title={"Register"}
            type="submit"
            className="mt-3 w-full bg-black text-white"
          >
            <RightArrow />
          </Button>
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
