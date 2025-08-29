import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";
export default function ImageDialog({
  children,
  name,
  image,
}: {
  children: React.ReactNode;
  name: string;
  image: string;
}) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="max-w-6xl w-full">
        <DialogHeader>
          <DialogTitle className="flex items-center justify-center text-xl md:text-3xl font-bold">
            {name}
          </DialogTitle>
          <div className="relative w-full h-[60vh] md:h-[80vh] rounded-lg overflow-hidden shadow-md">
            <Image src={image} alt={name} fill className="object-contain" />
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
