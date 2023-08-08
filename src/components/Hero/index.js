import Link from "next/link";
import Image from "next/image";
import HeroTexture from "@/assets/hero-texture.png";

import HeroImageSource from "@/assets/hero-image.png";
import { Button, HighlightedButton } from "@/shared/Button";

import { useTyped } from "@/hooks";

export default function Hero() {
  const typedOptions = {
    backSpeed: 50,
    backDelay: 1500,
    loop: true,
    showCursor: false,
  };

  const ref = useTyped(
    ["Introducing Parve AI", "Parse your image and solve it."],
    typedOptions
  );

  return (
    <>
      <div className="absolute top-0 left-0 right-0 flex flex-col items-center justify-start w-full min-h-[95vh] overflow-hidden z-1">
        <div className="absolute w-full min-h-[95vh] bg-gradient-to-t from-black to-transparent z-20"></div>
        <Image
          src={HeroImageSource}
          alt="Hero Image"
          className="absolute w-full min-h-[95vh] object-cover opacity-40 z-10"
          placeholder="blur"
          sizes="(max-width: 768px) 100vw,
                  (max-width: 1200px) 50vw,
                  33vw"
        />
      </div>
      <div className="relative z-30 w-full h-[95vh] flex flex-col items-center justify-end ">
        <div className="inline-block w-[100%] max-w-[50%] text-center text-white opacity-92 max-md:max-w-[90%]">
          <h1
            ref={ref}
            className="inline-block font-[CabinetGrotesk-ExtraBold] text-8xl leading-none max-xl:text-[3rem]"
          >
            Introducing Parve AI
          </h1>
        </div>
        <h4 className="mt-6 max-w-xl font-semibold text-lg leading-relaxed text-center text-white max-md:max-w-full max-md:px-14 max-md:text-sm max-md:mt-4">
          Say goodbye to manual transcription and hello to effortless efficiency
          using cutting-edge AI technology.
        </h4>
        <div className="relative z-1 w-[80%] h-[30%] mt-[-5] flex flex-col items-center justify-start pt-16 bg-hero-texture max-md:w-full max-md:pt-6 sm:mt-0 max-md:h-[10rem] max-md:overflow-hidden max-md:justify-center">
          <Image
            src={HeroTexture}
            alt="Texture"
            className="absolute top-0 w-full h-full mt-[-5] object-contain opacity-30 z-[-1] max-md:mt-5 max-md:w-[250%]"
            placeholder="blur"
            draggable={false}
          />
          <Button
            title={"Get Started"}
            as={Link}
            href="/parve-it"
            className="bg-main text-white font-bold border-none"
          />
        </div>
      </div>
    </>
  );
}
