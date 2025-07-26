"use client";
import { SiMaildotru } from "react-icons/si";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
export default function CopyButton() {
  function copiarAlPortapapeles() {
    toast("Correo copiado con exito", {
      description: "SergioRivasPR24@hotmail.com",
      action: {
        label: "Cerrar",
        onClick: () => console.log("Cerrar"),
      },
    });
    navigator.clipboard.writeText("SergioRivasPR24@hotmail.com");
  }
  return (
    <Button
      variant="outline"
      size="sm"
      className="cursor-pointer"
      onClick={copiarAlPortapapeles}
    >
      <SiMaildotru />
      Correo
    </Button>
  );
}
