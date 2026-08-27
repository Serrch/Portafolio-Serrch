"use client";
import { Button } from "../ui/button";
import { SiGithub } from "react-icons/si";

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
  function click() {
    onClick?.();
    return link ? window.open(link) : window.open("https://github.com/Serrch");
  }
  return (
    <Button
      variant={variant}
      size={size}
      className={`cursor-pointer ${variant === "link" ? "h-auto px-0" : ""}`}
      onClick={click}
    >
      <SiGithub /> {link ? "Código" : "Github"}
    </Button>
  );
}
