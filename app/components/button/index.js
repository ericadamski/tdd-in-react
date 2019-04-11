import React from "react";
import Link from "next/link";
import { Wrapper } from "./button.styled.js";

export default function Button(props) {
  const B = (
    <Wrapper
      role={props.role}
      circle={props.circle}
      color={props.color}
      onClick={props.onClick}
    >
      {props.children}
    </Wrapper>
  );

  if (props.href) {
    return <Link href={props.href}>{B}</Link>;
  }

  return B;
}
