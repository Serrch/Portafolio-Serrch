import Link from "next/link";
import { Button } from "../ui/button";
import { GoProjectSymlink } from "react-icons/go";
import { FiExternalLink } from "react-icons/fi";

export default function RedirectButton({
  link,
  texto,
  onClick,
}: {
  link: string;
  texto?: string;
  onClick?: () => void;
}) {
  // Los proyectos con sitio publicado apuntan fuera del portafolio: abrirlos en
  // la misma pestaña deja al visitante sin camino de vuelta.
  const esExterno = link.startsWith("http");

  const boton = (
    <Button variant="outline" size="sm" className="cursor-pointer">
      {esExterno ? <FiExternalLink /> : <GoProjectSymlink />}
      {texto ?? (esExterno ? "Visitar sitio" : "Ver más")}
    </Button>
  );

  if (esExterno) {
    return (
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="flex"
        onClick={onClick}
      >
        {boton}
      </a>
    );
  }

  return (
    <Link href={link} className="flex" onClick={onClick}>
      {boton}
    </Link>
  );
}
