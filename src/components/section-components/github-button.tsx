import { Button } from "../ui/button";
import { SiGithub } from "react-icons/si";

export default function GithubButton({
  link,
  size,
}: {
  link?: string;
  size?: "sm" | "default" | "lg";
}) {
  function click() {
    return link ? window.open(link) : window.open("https://github.com/Serrch");
  }
  return (
    <Button
      variant="outline"
      size={size ? size : "sm"}
      className="cursor-pointer"
      onClick={click}
    >
      <SiGithub /> {link ? "Código" : "Github"}
    </Button>
  );
}
