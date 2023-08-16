const SkeletonProfile = () => {
  return (
    <div className="relative  w-full flex flex-col items-center justify-start">
      <div className="relative w-full min-h-[300px] bg-zinc-700 z-0  max-md:min-h-[250px]">
        <div className="absolute inset-0 object-cover w-full h-full z-1 "></div>
      </div>
      <div className="container flex flex-row items-start justify-center gap-4 z-10 max-lg:flex-col max-md:px-6 max-md:gap-8">
        <div className="max-w-[400px] w-full mt-[-65px] pl-12  max-md:max-w-full max-md:pl-0">
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonProfile;
