import { Button } from "../ui/button";
import { SiGithub } from "react-icons/si";
export default function CopyEmailButton() {
  function copiarAlPortapapeles() {
    navigator.clipboard.writeText("SergioRivasPR24@hotmail.com");
  }
  return (
    <Button
      variant="outline"
      size="sm"
      onClick={copiarAlPortapapeles}
      className="cursor-pointer"
    >
      <SiGithub /> Correo
    </Button>
  );
}
