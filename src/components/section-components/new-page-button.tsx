import { Button } from "../ui/button";
import { FiLink2 } from "react-icons/fi";
export default function NewPageButton({ link }: { link: string }) {
  function click() {
    return link ? window.open(link) : window.open("https://github.com/Serrch");
  }
  return (
    <div>
      <Button
        variant="outline"
        size="sm"
        className="cursor-pointer  "
        onClick={click}
      >
        <FiLink2 />
        Página
      </Button>
    </div>
  );
}
