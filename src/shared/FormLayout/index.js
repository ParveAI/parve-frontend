import Image from "next/image";
import { FormContent, FormTitle } from "./styles";

import ParveLogo from "@/assets/parve-logo.svg";

export default function FormLayout({ title = "Sign in to Parve", children }) {
  return (
    <FormContent>
      <Image src={ParveLogo} alt="Logo" height={30} width={120} />
      <FormTitle>{title}</FormTitle>
      {children}
    </FormContent>
  );
}
