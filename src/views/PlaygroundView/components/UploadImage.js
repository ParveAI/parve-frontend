import React, { useState, useRef } from "react";
import { Upload } from "@/components/icons";
import { HighlightedButtonWithLoader } from "@/shared/Button";
import { useAuth } from "@/context/AuthContext";

const UploadImage = ({ setTranscript }) => {
  const token = useAuth((state) => state.token);
  const [isLoading, setIsLoading] = useState(false);
  const [upImg, setUpImg] = useState();
  const inputRef = useRef();

  // on selecting file we set load the image on to cropper
  const onSelectFile = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      const reader = new FileReader();
      console.log(reader.result);
      reader.addEventListener("load", () => {
        setUpImg(reader.result);
      });
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const sendImageToServer = () => {
    if (!upImg && upImg === "") return;
    setIsLoading(true);
    setTranscript("");

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", inputRef?.current?.files?.[0]?.type);
    myHeaders.append("Authorization", `Bearer ${token}`);

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: inputRef?.current?.files[0],
      redirect: "follow",
    };

    fetch(
      "https://parve-backend.ahmetcanisik5458675.workers.dev/image/toText",
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => {
        // if (!result?.question) return;

        console.log(JSON.parse(result));
        const resultObj = JSON.parse(result);
        setTranscript(resultObj?.question?.ocr_text);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log("error", error);
        setIsLoading(false);
      });
  };

  return (
    <div className="w-full min-h-full flex flex-col items-center justify-start ">
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
        className="w-full min-h-[200px] mb-4 bg-black flex flex-col items-center justify-center border-dashed border-[1.8px] border-zinc-600 rounded-2xl max-md:h-full"
      >
        <div className="h-14 w-14 min-h-14 min-w-14 flex items-center justify-center">
          <Upload fill="white" className="scale-[2.2]" />
        </div>
        <h6 className="mt-1 font-normal text-sm text-zinc-400">
          Upload your image to start
        </h6>
      </button>
      <div className="relative w-full min-h-[200px] max-h-[40vh] mb-4 h-fit bg-black rounded-2xl overflow-hidden flex items-center justify-center">
        {upImg && <img src={upImg} alt="absolute inset-0 w-full h-full" />}
      </div>
      <HighlightedButtonWithLoader
        title={"Upload Image"}
        onClick={sendImageToServer}
        className="w-full"
        isLoading={isLoading}
      />
    </div>
  );
};

export default UploadImage;
