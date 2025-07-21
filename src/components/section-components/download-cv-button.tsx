import { Button } from "../ui/button";
import { FiDownload } from "react-icons/fi";

export default function DownloadCVButton() {
  function downloadPDF() {}
  return (
    <a href="/cv.pdf" download={"CV_Sergio_Enrique_Perez_Rivas.pdf"}>
      <Button
        variant="outline"
        size="sm"
        className="cursor-pointer"
        onClick={downloadPDF}
      >
        <FiDownload /> Descargar CV
      </Button>
    </a>
  );
}
