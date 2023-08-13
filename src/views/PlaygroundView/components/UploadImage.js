import React, { useState, useRef, useCallback, useEffect } from "react";
import { Upload } from "@/components/icons";
import { UploadServices } from "@/services";
import { HighlightedButton } from "@/shared/Button";

const UploadImage = () => {
  const [upImg, setUpImg] = useState();
  const inputRef = useRef();

  // on selecting file we set load the image on to cropper
  const onSelectFile = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      const reader = new FileReader();
      console.log(reader.result);
      reader.addEventListener("load", () => {
        console.log(reader.result);
        setUpImg(reader.result?.toString() || "");
      });
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  //   useEffect(() => {
  //     console.log(upImg);
  //     if (!upImg && upImg === "") return;
  //     UploadServices.imageToText(upImg)
  //       .then((res) => {
  //         console.log(res);
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   }, [upImg]);
  const sendImageToServer = () => {
    if (!upImg && upImg === "") return;
    console.log(inputRef?.current?.files?.[0]);
    UploadServices.imageToText(upImg)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <div>
        <input
          ref={inputRef}
          type="file"
          accept="image/*"
          onChange={onSelectFile}
          className="hidden"
        />
      </div>
      <button
        onClick={() => inputRef?.current?.click()}
        className="w-full h-[200px] mb-4 bg-black flex flex-col items-center justify-center border-dashed border-[1.8px] border-zinc-600 rounded-2xl"
      >
        <div className="h-14 w-14 min-h-14 min-w-14 flex items-center justify-center">
          <Upload fill="white" className="scale-[2.2]" />
        </div>
        <h6 className="mt-1 font-normal text-sm text-zinc-400">
          Upload your image to start
        </h6>
      </button>
      <div className="relative w-full h-fit max-h-screen bg-black rounded-2xl overflow-hidden">
        <img src={upImg} alt="absolute inset-0 w-full h-full" />
      </div>
      <HighlightedButton title={"Upload Image"} onClick={sendImageToServer} />
    </>
  );
};

export default UploadImage;
