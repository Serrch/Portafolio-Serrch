"use client";

import Link from "next/link";
import LogoSVG from "./icon-svg/logo-svg";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2.5 shrink-0">
      <LogoSVG />
      <span className="font-semibold tracking-tight whitespace-nowrap">
        Sergio Pérez
      </span>
    </Link>
  );
}
