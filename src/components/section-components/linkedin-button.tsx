"use client";
import { Button } from "../ui/button";
import { SiLinkedin } from "react-icons/si";
import { LINKEDIN_URL } from "@/lib/site";

export default function LinkedinButton({
  size = "sm",
  onClick,
}: {
  size?: "sm" | "default" | "lg";
  onClick?: () => void;
}) {
  function click() {
    onClick?.();
    window.open(LINKEDIN_URL);
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
