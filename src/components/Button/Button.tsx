import { PropsWithChildren } from "react";
import { SButton } from "./SButton.styled";

export function Button({ children }: PropsWithChildren) {
  return <SButton>{children}</SButton>;
}
