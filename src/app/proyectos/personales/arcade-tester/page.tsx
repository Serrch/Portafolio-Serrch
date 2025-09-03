"use client";
import Image from "next/image";
import ChooseIcon from "@/components/section-components/experiencia-components/choose-icon-function";
import { TechOptions } from "@/types/sobre-mi-types/card-types";
import LabelTerminado from "@/components/proyectos-components/label-terminado";
import GithubButton from "@/components/section-components/github-button";
import ImagenZoom from "@/components/image-zoom";
export default function ArcadeTesterDetail() {
  const rutaImagenes: string = "/assets/img-proyectos/personales/arcade/";
  const arrTech: TechOptions[] = [".NET"];
  const arrImagenes: string[] = [
    rutaImagenes + "arcade-layout.png",
    rutaImagenes + "arcade-diagrama.png",
    rutaImagenes + "arcade-layout-2.png",
  ];

  return (
    <main className="max-w-6xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-4">Arcade Tester</h1>

      <div className="flex flex-wrap gap-2 items-start justify-between mb-6">
        <LabelTerminado />
        <p>
          <strong className="text-sm dark:text-zinc-400">Abril 2023</strong>
        </p>
      </div>

      <p className="text-lg text-justify leading-relaxed mb-8">
        <strong>Arcade Tester</strong> es una aplicación desarrollada con{" "}
        <strong>.NET</strong> y <strong>Arduino</strong> que permite reconocer y
        probar los inputs de un control arcade. Para lograrlo utilicé la
        librería <strong>SharpDX</strong>, creando una solución que facilita a
        los aficionados validar rápidamente sus controles y corregir botones mal
        mapeados.
      </p>

      <div className="flex justify-center">
        <div className="relative h-80 w-lg mb-10 rounded-xl overflow-hidden shadow-lg flex justify-center items-center">
          <Image
            src={rutaImagenes + "arcade-tester.gif"}
            alt="Arcade Tester en acción - detección de inputs"
            width={400}
            height={100}
            className="object-cover rounded-xl"
          />
        </div>
      </div>

      <section className="mb-10">
        <h3 className="scroll-m-20 pb-2 text-3xl tracking-tight first:mt-0">
          ¿Qué hice en el proyecto?
        </h3>

        <div>
          <strong className="text-lg">Descripción</strong>
          <p className="text-lg text-justify leading-relaxed mb-8">
            Diseñé un puente con ayuda de la librería <strong>SharpDX </strong>
            que permite a .NET detectar un control arcade construido con
            Arduino. Como SharpDX únicamente reconoce entradas de tipo{" "}
            <em>DInput</em> y <em>XInput</em> (controles de Xbox 360 y Xbox
            One), fue necesario flashear el firmware de la placa Arduino e
            implementar el código que interpretara correctamente los switches
            del control arcade.
          </p>
        </div>

        <div>
          <strong className="text-lg">Actividades</strong>
          <ul className="my-3 ml-6 list-disc [&>li]:mt-1">
            <li>
              Programé la placa Arduino para reconocer los inputs de los
              switches.
            </li>
            <li>Flasheé la memoria de la placa con el nuevo firmware.</li>
            <li>
              Desarrollé una aplicación en .NET para detectar el control arcade.
            </li>
            <li>
              Implementé un sistema visual que muestra en tiempo real qué
              botones están siendo presionados.
            </li>
          </ul>
        </div>
      </section>

      <section className="mb-10">
        <h3 className="scroll-m-20 pb-2 text-3xl tracking-tight first:mt-0">
          Contexto
        </h3>
        <strong className="text-lg">¿Qué es un Arcade Controller?</strong>
        <p className="text-lg text-justify leading-relaxed mb-4">
          Un <strong>Arcade Controller</strong> es una adaptación de los
          tableros de máquinas recreativas para consolas o PC, que permite jugar
          de manera más "clásica". Su uso se popularizó en la escena competitiva
          de juegos de pelea, ya que muchos profesionales preferían estos
          controles frente a los de consolas como Xbox 360 o PlayStation 3.
        </p>
        <strong className="text-lg">¿Qué es flashear?</strong>
        <p className="text-lg text-justify leading-relaxed mb-4">
          Flashear un dispositivo consiste en instalar o reemplazar un sistema
          operativo o firmware mediante un proceso de carga en la memoria flash
          del equipo.
        </p>
      </section>

      <section className="mb-10">
        <h3 className="scroll-m-20 pb-2 text-3xl tracking-tight first:mt-0">
          Tecnologías utilizadas
        </h3>
        <ul
          className="flex flex-wrap gap-3"
          aria-label="Lista de tecnologías utilizadas en el proyecto"
        >
          {arrTech.map((tech) => (
            <li
              key={tech}
              className="px-4 py-2 rounded-2xl border dark:border-zinc-700 bg-accent shadow-md flex flex-col gap-1 items-center justify-center"
            >
              <ChooseIcon name={tech} />
              {tech}
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-10">
        <h3 className="scroll-m-20 pb-2 text-3xl tracking-tight first:mt-0 mb-2">
          Repositorio
        </h3>
        <div className="flex flex-wrap gap-2">
          <GithubButton
            link={"https://github.com/Serrch/Arcade-tester"}
            size="lg"
          />
        </div>
      </section>

      <section className="mb-10">
        <h3 className="scroll-m-20 pb-2 text-3xl tracking-tight first:mt-0">
          Galería
        </h3>
        <div className="flex flex-wrap gap-6 justify-start">
          {arrImagenes.map((imagen, index) => (
            <div key={index} className="flex w-lg items-stretch">
              <ImagenZoom
                src={imagen}
                alt={`Arcade-Tester-Captura ${index + 1}`}
              ></ImagenZoom>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
