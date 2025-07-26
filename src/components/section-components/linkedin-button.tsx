import { Button } from "../ui/button";
import { SiLinkedin } from "react-icons/si";

export default function LinkedinButton() {
  function click() {
    window.open("https://linkedin.com/in/serrrch");
  }
  return (
    <div>
      <Button
        variant="outline"
        size="sm"
        className="cursor-pointer"
        onClick={click}
      >
        <SiLinkedin /> LinkedIn
      </Button>
    </div>
  );
}
