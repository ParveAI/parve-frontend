import ActionBox from "@/shared/ActionBox";
import { Magic } from "@/components/icons";

import { useState } from "react";
import UploadImage from "./components/UploadImage";

const PlaygroundView = () => {
  const [solveLoader, setSolveLoader] = useState(false);
  const [regenerateLoader, setRegenerateLoader] = useState(false);
  const [transcript, setTranscript] = useState("");
  const [solution, setSolution] = useState("");

  const sendTrancsriptToServer = (extraText = false) => {
    !extraText ? setSolveLoader(true) : setRegenerateLoader(true);
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      prompt: transcript + " " + extraText,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(
      process.env.NEXT_PUBLIC_API_URL,
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => {
        setSolution(JSON.parse(result));
        setSolveLoader(false);
        setRegenerateLoader(false);
      })
      .catch((error) => {
        console.log("error", error);
        setSolveLoader(false);
        setRegenerateLoader(false);
      });
  };
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-start mt-[85px] bg-[#1A1A1A] border-t-[1px] border-zinc-600 xl:overflow-hidden max-md:min-h-full max-md:h-full">
      <div className="max-w-screen w-full h-full flex flex-row items-center justify-center max-md:flex-col max-md:h-fit max-md:justify-start">
        <div className="h-full max-w-[320px] w-full bg-white/[0.05] border-r-[1px] border-zinc-600 max-md:border-r-0 max-md:max-w-full max-md:w-full max-md:h-full">
          <div className="w-full h-fit border-b-[1px] border-zinc-600 bg-white/[0.05]  ">
            <ActionBox icon={<Magic />} title="Upload image">
              <div className="h-fit w-full flex flex-col items-center justify-center p-5 bg-white/[0.05] ">
                <UploadImage setTranscript={setTranscript} />
              </div>
            </ActionBox>
          </div>
        </div>
        <div className="flex-1 w-full h-full flex flex-row items-center justify-center bg-zinc-600 max-xl:flex-col">
          <div className="flex-1 h-full w-full  max-md:h-fit max-md:min-h-[500px]">
            <div className="h-full w-full border-r-[1px] border-zinc-600 max-xl:border-b-[1px] max-xl:border-r-0">
              <ActionBox
                copyText={transcript}
                icon={<Magic />}
                title="Transcript of your image"
                description="Edit the text as you wish and click the button to solve it."
                buttonText="Solve it"
                isButtonLoading={solveLoader}
                buttonHandler={() => sendTrancsriptToServer()}
              >
                <textarea
                  value={transcript}
                  className="absolute inset-0 w-full h-full resize-none bg-white/[0.05] p-5 font-sans font-normal text-[1rem] leading-relaxed text-white"
                  onChange={(e) => setTranscript(e.target.value)}
                />
              </ActionBox>
            </div>
          </div>
          <div className="flex-1 h-full w-full max-md:h-fit max-md:min-h-[500px]">
            <div className="h-full w-full">
              <ActionBox
                copyText={solution}
                icon={<Magic />}
                title="Solution of your transcript"
                description="Your solution will be here. You can edit the text."
                buttonText="Generate new"
                isButtonLoading={regenerateLoader}
                buttonHandler={() =>
                  sendTrancsriptToServer("(Can you explain longer?)")
                }
              >
                <textarea
                  value={solution}
                  className="absolute inset-0 w-full h-full resize-none bg-white/[0.05] p-5 font-sans font-normal text-[1rem] leading-relaxed text-white"
                  onChange={(e) => setSolution(e.target.value)}
                />
              </ActionBox>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaygroundView;
