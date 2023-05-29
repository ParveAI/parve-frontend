import {
  BackgroundContent,
  HeroImage,
  HeroSection,
  HeroTitle,
  HeroDesc,
  BottomContent,
  Texture,
} from "./index.styles";

import HeroImageSource from "../../assets/hero-image.png";
import TextureSource from "../../assets/hero-texture.png";
import { HighlightedButton } from "@/shared/Button";

import { useTyped } from "@/hooks";
import Link from "next/link";

export default function Hero() {
  const typedOptions = {
    backSpeed: 50,
    backDelay: 1500,
    loop: true,
  };

  const ref = useTyped(
    ["Introducing Parve AI", "Parse your image and solve it."],
    typedOptions
  );

  return (
    <>
      <BackgroundContent>
        <HeroImage
          src={HeroImageSource}
          alt="Hero Image"
          placeholder="blur"
          sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
        />
      </BackgroundContent>
      <HeroSection>
        <HeroTitle ref={ref}>Introducing Parve AI</HeroTitle>
        <HeroDesc>
          Say goodbye to manual transcription and hello to effortless efficiency
          using cutting-edge AI technology.
        </HeroDesc>
        <BottomContent>
          <Texture
            src={TextureSource}
            alt="Texture"
            placeholder="blur"
            draggable={false}
          />
          <HighlightedButton title={"Get Started"} as={Link} href="/parve-it" />
        </BottomContent>
      </HeroSection>
    </>
  );
}
