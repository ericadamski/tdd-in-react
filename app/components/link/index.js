import Link from "next/link";
import { A } from "./link.styled.js";

export default function(props) {
  return (
    <Link href={props.href}>
      <A>{props.children}</A>
    </Link>
  );
}
