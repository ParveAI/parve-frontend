import { Button, HighlightedButton } from "@/shared/Button";
import Link from "next/link";

const CollectionView = ({ slug }) => {
  return (
    <div className="w-full flex flex-col items-center justify-start bg-zinc-900 border-t-2 border-zinc-700">
      <div className="max-w-full w-full h-fit px-16 flex flex-col items-center justify-start max-md:flex-col max-md:justify-start max-lg:px-8 max-md:px-0">
        <div className="w-full h-32 border-b border-zinc-800 flex flex-row items-center justify-between gap-3 max-xl:h-fit max-xl:py-6 max-lg:px-0 max-md:px-7 max-md:flex-col max-md:items-start">
          <div className="h-full flex flex-col items-start justify-center gap-2 text-left">
            <h4 className="text-base text-zinc-300 font-normal max-md:text-xs">
              Collections /{" "}
              <span className="text-white font-medium bg-main/20 px-2 py-1 rounded-md">
                Ceng Programming Final Exam 2021
              </span>
            </h4>
            <h2 className="flex flex-row items-center justify-center text-left text-4xl text-zinc-100 font-bold font-[CabinetGrotesk-ExtraBold] max-md:text-3xl max-md:flex-col max-md:items-start max-md:justify-start">
              <span className="text-white">{`Question / `}</span>
              <span className="text-white">Animal Counter</span>
            </h2>
          </div>
          <div className="flex flex-row items-center justify-center gap-2 ">
            <Button
              title="Cancel"
              className="bg-black/70 text-white border-none px-9"
            />
            <HighlightedButton title="Save Collection" />
          </div>
        </div>
        <div className="w-full h-full flex flex-row items-start justify-center pt-6 gap-2 max-md:gap-6 max-md:flex-col max-md:px-7">
          <div className="flex-1 w-full">
            <div className="min-h-screen w-full h-full flex flex-col items-start justify-start gap-4 bg-zinc-700 rounded-2xl p-4">
              <div className="w-full flex flex-col items-center justify-start gap-4">
                <div className="w-full flex flex-row items-center justify-between gap-4 max-md:flex-col">
                  <div className="relative flex-1 aspect-square w-full h-full flex flex-row items-center justify-between overflow-hidden rounded-2xl bg-black">
                    <div className="z-20 absolute top-0 left-0 right-0 w-full h-14 flex flex-row items-center justify-start px-4 bg-gradient-to-b from-black/80 to-transparent">
                      <h4 className="text-zinc-300 font-bold text-2xl font-[CabinetGrotesk-ExtraBold] drop-shadow-xl">
                        Image
                      </h4>
                    </div>
                    <img
                      className="absolute inset-0 w-full h-full object-contain object-center "
                      src="https://ewbexihththlkcqybuoa.supabase.co/storage/v1/object/public/images/admin1/1691942550526"
                      alt="animal-counter"
                    />
                  </div>
                  <div className="relative flex-1 aspect-square w-full h-full flex flex-col items-start justify-start overflow-hidden rounded-2xl bg-black">
                    <div className="z-20 absolute top-0 left-0 right-0 w-full h-14 flex flex-row items-center justify-start px-4 bg-gradient-to-b from-black from-[70%] to-transparent">
                      <h4 className="text-zinc-300 font-bold text-2xl font-[CabinetGrotesk-ExtraBold]">
                        Transcription
                      </h4>
                    </div>
                    <textarea
                      defaultValue={transcription}
                      className="z-10 absolute inset-0 w-full h-full resize-none bg-transparent pt-16 p-5 font-sans font-normal text-[1rem] leading-relaxed text-white"
                    />
                  </div>
                </div>
                <div className="relative w-full aspect-square h-screen flex flex-row items-center justify-between gap-4 rounded-2xl overflow-hidden bg-black">
                  <div className="z-20 absolute top-0 left-0 right-0 w-full h-14 flex flex-row items-center justify-start px-4 bg-gradient-to-b from-black from-[70%] to-transparent">
                    <h4 className="text-zinc-300 font-bold text-2xl font-[CabinetGrotesk-ExtraBold]">
                      AI Response
                    </h4>
                  </div>
                  <textarea
                    defaultValue={aiResponse}
                    className="z-10 absolute inset-0 w-full h-full resize-none bg-transparent pt-16 p-5 font-sans font-normal text-[1rem] leading-relaxed text-white"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex-2 min-w-[450px] px-6 pb-5 w-full h-full flex flex-col items-start justify-start max-md:px-0">
            <h3 className="text-white text-xl font-bold py-2 px-4 mb-7 border-b border-b-zinc-300">
              Other Questions
            </h3>
            <div className="w-full flex flex-col items-center gap-y-4 justify-start">
              {Array(10)
                .fill(0)
                .map((_, i) => (
                  <Link
                    href={`/collection/${slug}?question=${i + 1}`}
                    key={i}
                    className="w-full py-4 px-5 bg-zinc-800/60 shadow-md rounded-xl transition-colors hover:bg-zinc-700/70"
                  >
                    <h4 className="text-white text-xl font-[CabinetGrotesk-ExtraBold]">
                      Question {i + 1}
                    </h4>
                    <p className="text-zinc-200 text-base font-normal">
                      There are 49 dogs signed up to compete in the dog
                      show.There are 36 more small dogs than large dogs signed
                      up to compete.
                    </p>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const transcription = `There are 49 dogs signed up to compete in the dog show. There are 36 more small dogs than large dogs signed up to compete.`;

const aiResponse = `To determine the number of small dogs signed up to compete, we need to find the number of large dogs signed up and then add 36 to it.

Let's assume the number of large dogs signed up to compete is L.
The number of small dogs signed up to compete is then L + 36.
                  
Since the total number of dogs signed up to compete is 49, we can write the equation:
L + (L + 36) = 49
                  
Simplifying the equation, we get:
2L + 36 = 49
                  
Subtracting 36 from both sides:
2L = 13
                  
Dividing both sides by 2:
L = 6.5
                  
Since the number of large dogs cannot be a decimal, this means there is a mistake in the information provided. Therefore, we cannot determine the correct number of small dogs signed up to compete.`;

export default CollectionView;
