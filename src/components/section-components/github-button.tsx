import { Button } from "../ui/button";
import { SiGithub } from "react-icons/si";

export default function GithubButton() {
  function click() {
    window.open("https://github.com/Serrch");
  }
  return (
    <Button
      variant="outline"
      size="sm"
      className="cursor-pointer"
      onClick={click}
    >
      <SiGithub /> GitHub
    </Button>
  );
}
