import { useState } from "react";
import { Button } from "../ui/button";
import { SiMaildotru } from "react-icons/si";

export default function CopyEmailButton() {
  const [showTooltip, setShowTooltip] = useState(false);

  function copiarAlPortapapeles() {
    navigator.clipboard.writeText("SergioRivasPR24@hotmail.com");
    setShowTooltip(true);
    setTimeout(() => setShowTooltip(false), 2000);
  }

  return (
    <div className="relative inline-block">
      <Button
        variant="outline"
        size="sm"
        onClick={copiarAlPortapapeles}
        className="cursor-pointer"
      >
        <SiMaildotru className="mr-1" />
        Correo
      </Button>

      {showTooltip && (
        <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-background border text-xs rounded px-3 py-1 shadow-md z-10 transition-opacity duration-300 opacity-100">
          Correo copiado en portapapeles
        </div>
      )}
    </div>
  );
}
