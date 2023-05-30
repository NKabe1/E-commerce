import { PropsWithChildren } from "react";
import { SButton } from "./SButton.styled";

type TButtonProps = {
  onClick: () => void
}

export function Button({ children, onClick }: PropsWithChildren<TButtonProps>) {
  return <SButton onClick={onClick}>{children}</SButton>;
}
