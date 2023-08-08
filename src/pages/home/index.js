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
      <div className="z-40 w-full h-[900px] text-white flex flex-col items-center justify-start">
        <div className="w-[90%] h-full bg-[#282828]/80 rounded-xl">
          <code>
            <pre className="max-w-[90vw] break-all overflow-hidden">
              {JSON.stringify(auth, null, 2)}
            </pre>
          </code>
        </div>
      </div>
    </div>
  );
}
