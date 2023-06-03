import { PropsWithChildren } from "react";
import { SSectionTitle } from "./SSectionTitle.styled";

export function SectionTitle({children}: PropsWithChildren) {
  return (
    <SSectionTitle>{children}</SSectionTitle>
  )
}
