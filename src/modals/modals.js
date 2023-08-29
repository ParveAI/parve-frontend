import LoginModal from "./components/LoginModal";
import RegisterModal from "./components/RegisterModal";
import UploadModal from "./components/UploadModal";
import UserInfoModal from "./components/UserInfoModal";
import TextAreaModal from "./components/TextAreaModal";

export const modals = [
  {
    name: "Login",
    component: LoginModal,
  },
  {
    name: "Register",
    component: RegisterModal,
  },
  {
    name: "UserInfo",
    component: UserInfoModal,
  },
  {
    name: "UploadImage",
    component: UploadModal,
  },
  {
    name: "TextArea",
    component: TextAreaModal,
  },
];
