"use client";
import { Button } from "../ui/button";
import { SiLinkedin } from "react-icons/si";

export default function LinkedinButton({
  size = "sm",
  onClick,
}: {
  size?: "sm" | "default" | "lg";
  onClick?: () => void;
}) {
  function click() {
    onClick?.();
    window.open("https://linkedin.com/in/serrrch");
  }
  return (
    <Button
      variant="outline"
      size={size}
      className="cursor-pointer"
      onClick={click}
    >
      <SiLinkedin /> LinkedIn
    </Button>
  );
}
