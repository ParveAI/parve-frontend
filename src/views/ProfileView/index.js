import SkeletonProfile from "./components/SkeletonProfile";
import ProfileTab from "@/components/ProfileTab";

const ProfileView = ({ user }) => {
  if (!user) return <SkeletonProfile />;
  return (
    <div className="relative w-full flex flex-col items-center justify-start pb-20">
      <div className="relative w-full min-h-[300px] bg-gradient-to-r to-[#92FE9D] from-[#00C9FF] z-0  max-md:min-h-[250px]">
        {user?.banner && (
          <img
            src={user?.banner}
            alt="image"
            className="absolute inset-0 object-cover w-full h-full z-1"
          />
        )}
      </div>
      <div className="container flex flex-row items-start justify-center gap-6 z-10 max-lg:flex-col max-md:gap-8 max-xl:px-12 max-md:px-6">
        <div className="max-w-[300px] w-full mt-[-65px] max-xl:max-w-[240px] max-md:max-w-full max-md:pl-0">
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
          <ProfileTab />
        </div>
      </div>
    </div>
  );
};

export default ProfileView;
