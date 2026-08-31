"use client";
import { useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";

export default function ImagenZoom({ src, alt }: { src: string; alt: string }) {
  const [open, setOpen] = useState(false);
  // El optimizador de Next se queda con el primer fotograma de un GIF.
  const gif = src.endsWith(".gif");

  return (
    <>
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 768px) 100vw, 560px"
        unoptimized={gif}
        className="object-contain cursor-pointer hover:opacity-80 transition"
        onClick={() => setOpen(true)}
      />

      {open && (
        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4"
          onClick={() => setOpen(false)}
        >
          <button
            onClick={() => setOpen(false)}
            className="absolute top-4 right-4 text-white hover:text-red-400 transition hover:cursor-pointer"
          >
            <X size={32} />
          </button>

          <div
            className="relative w-full h-full max-w-6xl max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={src}
              alt={alt}
              fill
              unoptimized={gif}
              className="object-contain rounded-lg"
              priority={open}
            />
          </div>
        </div>
      )}
    </>
  );
}
