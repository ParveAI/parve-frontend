import LoginModal from "./components/LoginModal";
import RegisterModal from "./components/RegisterModal";
import UserInfoModal from "./components/UserInfoModal";

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
];
