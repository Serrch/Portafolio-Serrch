"use client";
import { Button } from "../ui/button";
import { FiDownload } from "react-icons/fi";

export default function DownloadCVButton({
  variant = "outline",
  size = "sm",
}: {
  variant?: "default" | "outline";
  size?: "sm" | "default" | "lg";
}) {
  return (
    <a
      href="/cv.pdf"
      download={"CV_Sergio_Enrique_Perez_Rivas.pdf"}
      onClick={() => window.umami?.track("descarga-cv")}
    >
      <Button variant={variant} size={size} className="cursor-pointer">
        <FiDownload /> Descargar CV
      </Button>
    </a>
  );
}
