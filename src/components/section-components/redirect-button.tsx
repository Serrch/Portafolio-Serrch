import Link from "next/link";
import { Button } from "../ui/button";

import { GoProjectSymlink } from "react-icons/go";

export default function RedirectButton({
  link,
  texto,
  onClick,
}: {
  link: string;
  texto: string;
  onClick?: () => void;
}) {
  return (
    <Link href={link} className="flex" onClick={onClick}>
      <Button variant="outline" size="sm" className="cursor-pointer">
        <GoProjectSymlink /> {texto}
      </Button>
    </Link>
  );
}
