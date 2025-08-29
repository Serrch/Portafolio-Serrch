import Link from "next/link";
import { Button } from "../ui/button";

import { GoProjectSymlink } from "react-icons/go";

export default function RedirectButton({
  link,
  texto,
}: {
  link: string;
  texto: string;
}) {
  return (
    <Link href={link} className="flex">
      <Button variant="outline" size="sm" className="cursor-pointer">
        <GoProjectSymlink /> {texto}
      </Button>
    </Link>
  );
}
