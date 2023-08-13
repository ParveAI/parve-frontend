import Hero from "@/components/Hero";
import { useAuth } from "@/context/AuthContext";
import { useEffect, useState } from "react";

export default function Home() {
  const [auth, setAuth] = useState(null);
  const isLoggedIn = useAuth((state) => state.isLoggedIn);

  useEffect(() => {
    setAuth({
      user: localStorage.getItem("_user"),
      token: localStorage.getItem("_token"),
      isLoggedIn: localStorage.getItem("_isLoggedIn"),
    });
  }, [isLoggedIn]);

  return (
    <div className="w-full h-full">
      <Hero />
    </div>
  );
}
