import { Button } from "../ui/button";
import { FiDownload } from "react-icons/fi";

export default function DownloadCVButton() {
  return (
    <a
      href="/cv.pdf"
      download={"CV_Sergio_Enrique_Perez_Rivas.pdf"}
      onClick={() => window.umami?.track("descarga-cv")}
    >
      <Button variant="outline" size="sm" className="cursor-pointer">
        <FiDownload /> Descargar CV
      </Button>
    </a>
  );
}
