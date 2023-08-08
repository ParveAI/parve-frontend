import { useEffect, useState } from "react";
import { useAuth } from "@/context/AuthContext";

import Navbar from "@/components/Navbar";
import Modal from "@/modals";
import ToastWrapper from "@/shared/ToastWrapper";

export default function Layout({ children }) {
  const [auth, setAuth] = useState(null);
  const isLoggedIn = useAuth((state) => state.isLoggedIn);
  const token = useAuth((state) => state.token);
  const logout = useAuth((state) => state.logout);
  const user = useAuth((state) => state.user);

  useEffect(() => {
    if (!isLoggedIn || token === "") {
      logout();
    }
    setAuth({
      user,
      token,
      isLoggedIn,
    });
  }, [isLoggedIn]);

  return (
    <LayoutContent>
      <Modal />
      <Navbar auth={auth} logout={logout} />
      {children}
      <ToastWrapper />
    </LayoutContent>
  );
}

const LayoutContent = ({ children }) => {
  return (
    <div className="w-full h-full min-h-full flex flex-col items-center justify-start">
      {children}
    </div>
  );
};
