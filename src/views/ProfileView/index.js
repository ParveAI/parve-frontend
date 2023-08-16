import { Dots } from "@/components/icons";
import Link from "next/link";
import SkeletonProfile from "./components/SkeletonProfile";

const ProfileView = ({ user }) => {
  if (!user) return <SkeletonProfile />;
  return (
    <div className="relative  w-full flex flex-col items-center justify-start">
      <div className="relative w-full min-h-[300px] bg-gradient-to-r to-[#92FE9D] from-[#00C9FF] z-0  max-md:min-h-[250px]">
        {user?.banner && (
          <img
            src={user?.banner}
            alt="image"
            className="absolute inset-0 object-cover w-full h-full z-1"
          />
        )}
      </div>
      <div className="container flex flex-row items-start justify-center gap-4 z-10 max-lg:flex-col max-md:px-6 max-md:gap-8">
        <div className="max-w-[400px] w-full mt-[-65px] pl-12 max-md:max-w-full max-md:pl-0">
          <div className="relative w-[160px] h-[160px] border-[6px] border-black rounded-3xl overflow-hidden max-md:w-[130px] max-md:h-[130px] max-md:border-[5px]">
            <img
              src={user?.avatar || "https://via.placeholder.com/160x160"}
              alt="image"
              className="absolute inset-0 object-cover w-full h-full"
            />
          </div>
          <div className="w-full flex flex-col items-start justify-center mt-3">
            <h1
              title={user?.fullname}
              className="font-[CabinetGrotesk-ExtraBold] text-3xl font-bold text-white pr-12 line-clamp-1"
            >
              {user?.fullname || user?.username}
            </h1>
            <h2 className="font-[CabinetGrotesk-Bold] text-xl font-medium text-zinc-300 pr-12 line-clamp-1 max-md:text-lg">
              @{user?.username}
            </h2>
          </div>
          <div>
            <button
              title="Coming Soon!"
              className="px-6 py-2 mt-3 bg-main/50 rounded-lg text-white font-bold cursor-not-allowed"
            >
              {user?.isMyProfile ? "Edit Profile" : "Follow"}
            </button>
          </div>
        </div>
        <div className="flex-1 w-full pt-10 max-md:p-0">
          <div className="w-full p-5 pt-3 flex flex-col items-start justify-star rounded-md text-white max-md:m-0 max-md:px-0">
            <div className="w-full h-[44px] border-b-[1px] border-white/40  font-bold">
              <button className="h-full w-fit flex items-center justify-center px-5 border-b-2 border-white cursor-pointer">
                Collections
              </button>
            </div>
            <div className="w-full h-full flex flex-col items-start justify-start text-left pt-4">
              <div className="w-full flex flex-row items-center justify-between mb-5">
                <h4 className="font-bold text-bold text-2xl ">
                  All Collections
                </h4>
                <input
                  type="text"
                  placeholder="Search"
                  className="w-[35%] h-full px-3 py-2 rounded-md text-white bg-white/10 max-md:hidden"
                />
              </div>
              <div className="w-full grid grid-cols-2 grid-flow-row gap-4 max-md:grid-cols-1">
                <Link
                  href={"#"}
                  className="py-5 px-5 bg-zinc-800 bg-gradient-to-br from-main/50 from-[10%] to-orange-500/50 flex items-start justify-between rounded-md"
                >
                  <h5 className="w-[80%] font-[CabinetGrotesk-ExtraBold] text-2xl">
                    Ceng Programming Final Exam 2021
                  </h5>
                  <button className="w-8 h-8 ml-2 bg-black/20 rounded-full flex items-center justify-center">
                    <Dots fill="white" />
                  </button>
                </Link>
                <Link
                  href={"#"}
                  className="py-5 px-5 bg-zinc-800 bg-gradient-to-br from-main/50 from-[10%] to-orange-500/50 flex items-start justify-between rounded-md"
                >
                  <h5 className="w-[80%] font-[CabinetGrotesk-ExtraBold] text-2xl line-clamp-2">
                    Random Questions
                  </h5>
                  <button className="w-8 h-8 ml-2 bg-black/20 rounded-full flex items-center justify-center">
                    <Dots fill="white" />
                  </button>
                </Link>
                <Link
                  href={"#"}
                  className="py-5 px-5 bg-zinc-800 bg-gradient-to-br from-main/50 from-[10%] to-orange-500/50 flex items-start justify-between rounded-md"
                >
                  <h5 className="w-[80%] font-[CabinetGrotesk-ExtraBold] text-2xl ">
                    React Native Supabase Interveiw
                  </h5>
                  <button className="w-8 h-8 ml-2 bg-black/20 rounded-full flex items-center justify-center">
                    <Dots fill="white" />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileView;
