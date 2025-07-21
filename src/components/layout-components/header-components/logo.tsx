"use client";

import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function Logo() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const logoSrc =
    theme === "light"
      ? "/assets/img-portafolio/logo2.png"
      : "/assets/img-portafolio/2.png";

  return (
    <div className="justify-items-start md:justify-items-center content-center">
      <div className="transition duration-300 ease-in-out hover:scale-115">
        <Link href="/">
          <Image
            src={logoSrc}
            alt="Logo Portafolio"
            width={40}
            height={40}
            className="scale-150"
          />
        </Link>
      </div>
    </div>
  );
}
