import { Button } from "../ui/button";
import { SiGithub } from "react-icons/si";

export default function GithubButton({ link }: { link?: string }) {
  function click() {
    return link ? window.open(link) : window.open("https://github.com/Serrch");
  }
  return (
    <Button
      variant="outline"
      size="sm"
      className="cursor-pointer"
      onClick={click}
    >
      <SiGithub /> {link ? "Código" : "Github"}
    </Button>
  );
}
