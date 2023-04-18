import FormLayout from "@/shared/FormLayout";
import { TextInput } from "@/shared/Input";
import { SubmitButton } from "@/shared/Button";
import { RightArrow } from "@/components/icons";

import { useState } from "react";

export default function SignupForm() {
  const [email, setEmail] = useState("");
  return (
    <FormLayout title="Sign up to Parve">
      <TextInput
        type={"email"}
        label={"Email"}
        placeholder={"alan.turing@example.com"}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <SubmitButton title={"Continue"} style={{ marginTop: "20px" }} >
        <RightArrow color="black"/>
      </SubmitButton>
    </FormLayout>
  );
}
