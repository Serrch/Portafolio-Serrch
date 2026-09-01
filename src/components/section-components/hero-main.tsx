import Image from "next/image";
import GithubButton from "./github-button";
import LinkedinButton from "./linkedin-button";
import DownloadCVButton from "./download-cv-button";
import Pill from "@/components/ui/pill";
import { TechOptions } from "@/types/sobre-mi-types/card-types";
import { Locale } from "@/i18n/config";
import { content } from "@/i18n/content";

const STACK_PRINCIPAL: TechOptions[] = [
  "Typescript",
  "React",
  "NextJS",
  ".NET",
  "Python",
  "FastAPI",
  "PostgreSQL",
];

export default function Hero({ locale }: { locale: Locale }) {
  const t = content[locale].hero;

  return (
    <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-14 md:py-20">
      <div className="grid items-center gap-10 md:grid-cols-[minmax(0,1fr)_auto] md:gap-14">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-brand">
            {t.rol}
          </p>

          <h1 className="mt-5 text-5xl md:text-7xl font-bold leading-[0.95] tracking-tight">
            Sergio E.
            <br />
            Pérez Rivas
          </h1>

          <p className="mt-6 max-w-xl text-lg md:text-xl leading-relaxed text-muted-foreground">
            {t.resumen}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <DownloadCVButton variant="default" size="lg" />
            <GithubButton size="lg" />
            <LinkedinButton size="lg" />
          </div>

          <div className="mt-10">
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-muted-foreground">
              {t.stackLabel}
            </p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {STACK_PRINCIPAL.map((tech) => (
                <Pill key={tech} tech={tech} />
              ))}
            </ul>
          </div>
        </div>

        <div className="relative order-first mx-auto h-72 w-60 overflow-hidden rounded-2xl border border-border md:order-none md:mx-0 md:h-[26rem] md:w-80">
          <Image
            src="/assets/img-portafolio/yo.jpg"
            alt={t.fotoAlt}
            fill
            sizes="(max-width: 768px) 240px, 320px"
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}
