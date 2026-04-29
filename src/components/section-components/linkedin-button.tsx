import { Button } from "../ui/button";
import { SiLinkedin } from "react-icons/si";

export default function LinkedinButton({ onClick }: { onClick?: () => void }) {
  function click() {
    onClick?.();
    window.open("https://linkedin.com/in/serrrch");
  }
  return (
    <Button
      variant="outline"
      size="sm"
      className="cursor-pointer"
      onClick={click}
    >
      <SiLinkedin /> LinkedIn
    </Button>
  );
}
