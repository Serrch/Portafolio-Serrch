"use client";

import Link from "next/link";
import { sections } from "@/routes/routes";
import LogoSVG from "./icon-svg/logo-svg";

export default function Logo() {
  return (
    <div className="justify-items-start md:justify-items-center content-center">
      <div className="transition duration-300 ease-in-out hover:scale-115">
        <Link href={sections[0].link}>
          <LogoSVG />
        </Link>
      </div>
    </div>
  );
}
