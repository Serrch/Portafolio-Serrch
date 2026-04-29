"use client";
import { SiMaildotru } from "react-icons/si";
import { FiDownload, FiPhone, FiGithub, FiLinkedin } from "react-icons/fi";
import DialogContacto from "./dialog-contacto";

export default function ContactGrid() {
  function openPage(link: string, event?: string) {
    if (event) window.umami?.track(event);
    return window.open(link);
  }
  const iconClass: string =
    "w-10 h-10 md:w-12 md:h-12 transition duration-200 ease-in-out text-emerald-700 dark:text-emerald-500 group-hover:text-stone-800 dark:group-hover:text-stone-300";
  const groupClass: string =
    "group flex flex-col gap-2 items-center justify-center p-2 aspect-square md:aspect-auto md:h-24 transition duration-200 ease-in-out hover:bg-accent hover:scale-105 cursor-pointer";
  return (
    <div
      className="
            grid grid-cols-2 md:grid-cols-5
            divide-x md:divide-y-0 divide-y md:divide-x
            border rounded-xl overflow-hidden shadow-md
          "
    >
      <DialogContacto IsCorreo={true}>
        <div
          className={groupClass}
          onClick={() => window.umami?.track("contacto-correo")}
        >
          <SiMaildotru className={iconClass} />
          <h4 className="scroll-m-20 md:text-xl font-semibold tracking-tight">
            Correo
          </h4>
        </div>
      </DialogContacto>
      <DialogContacto IsCorreo={false}>
        <div
          className={groupClass}
          onClick={() => window.umami?.track("contacto-telefono")}
        >
          <FiPhone className={iconClass} />
          <h4 className="scroll-m-20 md:text-xl font-semibold tracking-tight">
            Teléfono
          </h4>
        </div>
      </DialogContacto>
      <a
        href="/cv.pdf"
        download={"CV_Sergio_Enrique_Perez_Rivas.pdf"}
        onClick={() => window.umami?.track("descarga-cv-contacto")}
      >
        <div className={groupClass}>
          <FiDownload className={iconClass} />
          <h4 className="scroll-m-20 md:text-xl font-semibold tracking-tight">
            Curriculum
          </h4>
        </div>
      </a>
      <div
        className={groupClass}
        onClick={() => openPage("https://github.com/Serrch", "contacto-github")}
      >
        <FiGithub className={iconClass} />
        <h4 className="scroll-m-20 md:text-xl font-semibold tracking-tight">
          Github
        </h4>
      </div>
      <div
        className={groupClass + " col-span-2 md:col-span-1"}
        onClick={() =>
          openPage("https://linkedin.com/in/serrrch", "contacto-linkedin")
        }
      >
        <FiLinkedin className={iconClass} />
        <h4 className="scroll-m-20 md:text-xl font-semibold tracking-tight">
          LinkedIn
        </h4>
      </div>
    </div>
  );
}
