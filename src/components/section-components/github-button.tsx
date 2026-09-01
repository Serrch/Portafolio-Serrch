"use client";
import { Button } from "../ui/button";
import { SiGithub } from "react-icons/si";
import { GITHUB_URL } from "@/lib/site";
import { useLocale } from "@/i18n/use-locale";
import { ui } from "@/i18n/ui";

export default function GithubButton({
  link,
  size = "sm",
  variant = "outline",
  onClick,
}: {
  link?: string;
  size?: "sm" | "default" | "lg";
  variant?: "outline" | "link";
  onClick?: () => void;
}) {
  const t = ui[useLocale()].botones;

  function click() {
    onClick?.();
    return link ? window.open(link) : window.open(GITHUB_URL);
  }
  return (
    <Button
      variant={variant}
      size={size}
      className={`cursor-pointer ${variant === "link" ? "h-auto px-0" : ""}`}
      onClick={click}
    >
      <SiGithub /> {link ? t.codigo : "Github"}
    </Button>
  );
}
