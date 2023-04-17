import Image from "next/image";
import { NavbarContent, LogoLink, RightSide } from "./styles";
import ParveLogo from "@/assets/parve-logo.svg";
import Link from "next/link";

import { Button, HighlightedButton } from "@/shared/Button";
import { RightArrow } from "@/components/icons";

export default function Navbar() {
  return (
    <NavbarContent>
      <LogoLink as={Link} href="/">
        <Image src={ParveLogo} alt="Logo" height={30} width={120} />
      </LogoLink>
      <RightSide>
        <Button title={"Sign in"} as={Link} href="/login">
          <RightArrow />
        </Button>
        <HighlightedButton title={"Just Parve It"} as={Link} href="/perve-it" />
      </RightSide>
    </NavbarContent>
  );
}
