import UploadPhoto from "@/components/UploadPhoto";
import ParveTextBox from "@/components/ParveTextBox";

const ParveItView = () => {
  return (
    <div className="w-full h-full mt-[85px]">
      <div className="mx-auto h-full flex flex-row justify-between max-w-[80%] p-5 gap-5 max-md:max-w-full max-md:p-4 max-md:flex-col">
        <UploadPhoto />
        <ParveTextBox />
      </div>
    </div>
  );
};

export default ParveItView;
