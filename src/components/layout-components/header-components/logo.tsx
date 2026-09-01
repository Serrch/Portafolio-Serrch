"use client";

import Link from "next/link";
import LogoSVG from "./icon-svg/logo-svg";
import { useLocale } from "@/i18n/use-locale";

export default function Logo() {
  const locale = useLocale();

  return (
    <Link href={`/${locale}`} className="flex items-center gap-2.5 shrink-0">
      <LogoSVG />
      <span className="font-semibold tracking-tight whitespace-nowrap">
        Sergio Pérez
      </span>
    </Link>
  );
}
