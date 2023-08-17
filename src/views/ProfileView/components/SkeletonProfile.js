import ProfileTab from "@/components/ProfileTab";

const SkeletonProfile = () => {
  return (
    <div className="relative  w-full flex flex-col items-center justify-start">
      <div className="relative w-full min-h-[300px] bg-zinc-700 z-0  max-md:min-h-[250px]">
        <div className="absolute inset-0 object-cover w-full h-full z-1 "></div>
      </div>
      <div className="container flex flex-row items-start justify-center gap-6 z-10 max-lg:flex-col max-md:gap-8 max-xl:px-12 max-md:px-6">
        <div className="max-w-[300px] w-full mt-[-65px] max-xl:max-w-[240px] max-md:max-w-full max-md:pl-0">
          <div className="relative w-[160px] h-[160px] bg-black border-[6px] border-black rounded-3xl overflow-hidden max-md:w-[130px] max-md:h-[130px] max-md:border-[5px]">
            <div className="absolute inset-0 object-cover w-full h-full bg-zinc-700 animate-pulse"></div>
          </div>
          <div className="w-full flex flex-col items-start gap-3 justify-center mt-3 mb-2 animate-pulse ">
            <div className="h-7 w-52  bg-zinc-700 rounded-md"></div>
            <div className="h-5 w-32 bg-zinc-700 rounded-md"></div>
            <div className="h-10 w-36 px-6  bg-zinc-700 rounded-lg mt-1"></div>
          </div>
        </div>
        <div className="flex-1 w-full pt-10 max-md:p-0">
          <ProfileTab isLoading={true} />
        </div>
      </div>
    </div>
  );
};

export default SkeletonProfile;
