import Hero from "@/components/Hero";
import { useAuth } from "@/context/AuthContext";

export default function Home() {
  const isLoggedIn = useAuth((state) => state.isLoggedIn);
  const user = useAuth((state) => state.user);
  const token = useAuth((state) => state.token);
  console.log(token)
  return (
    <div className="w-full h-full">
      <Hero />
      <div className="z-40 w-full h-[900px] text-white flex flex-col items-center justify-start">
        <div className="w-[90%] h-full bg-[#282828]/80 rounded-xl">
          {JSON.stringify(isLoggedIn)}
          <hr />
          {JSON.stringify(user)}
          <hr />

          {token}
        </div>
      </div>
    </div>
  );
}
