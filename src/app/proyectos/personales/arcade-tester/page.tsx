import type { Metadata } from "next";
import {
  Dato,
  Galeria,
  ProyectoHeader,
  Puntos,
  Seccion,
} from "@/components/proyectos-components/proyecto-page";
import { TechOptions } from "@/types/sobre-mi-types/card-types";

export const metadata: Metadata = {
  title: "Arcade Tester",
  description:
    "Aplicación de escritorio en .NET para reconocer y probar los inputs de un control arcade construido con Arduino.",
};

const TECHS: TechOptions[] = [".NET", "Arduino"];
const RUTA = "/assets/img-proyectos/personales/arcade/";

export default function ArcadeTesterDetail() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
      <ProyectoHeader
        titulo="Arcade Tester"
        estado="Terminado"
        meta="Proyecto personal · Abril 2023"
        techs={TECHS}
        github="https://github.com/Serrch/Arcade-tester"
        lead={
          <p>
            Aplicación en .NET y Arduino que reconoce y prueba los inputs de un
            control arcade. Se apoya en la librería SharpDX para que los
            aficionados validen sus controles y corrijan botones mal mapeados
            sin tener que abrir un juego.
          </p>
        }
      />

      <div className="mt-10">
        <Galeria
          imagenes={[
            {
              src: RUTA + "arcade-tester.gif",
              ancho: 500,
              alto: 281,
              alt: "Arcade Tester detectando los inputs del control en tiempo real",
              pie: "La aplicación marca cada botón en el momento en que se presiona.",
            },
            {
              src: RUTA + "arcade-diagrama.png",
              ancho: 602,
              alto: 339,
              alt: "Diagrama de conexión entre los switches del control y la placa Arduino",
              pie: "Diagrama de conexión de los switches a la placa.",
            },
            {
              src: RUTA + "arcade-layout.png",
              ancho: 1280,
              alto: 720,
              alt: "Vista del layout de botones en la aplicación",
              pie: "Layout de botones dentro de la aplicación.",
            },
            {
              src: RUTA + "arcade-layout-2.png",
              ancho: 600,
              alto: 339,
              alt: "Segunda vista del layout de botones en la aplicación",
            },
          ]}
        />
      </div>

      <Seccion titulo="Mi trabajo">
        <p className="max-w-3xl leading-relaxed text-muted-foreground">
          Diseñé con SharpDX un puente que permite a .NET detectar un control
          arcade construido con Arduino. Como SharpDX solo reconoce entradas
          DInput y XInput, fue necesario flashear el firmware de la placa e
          implementar el código que interpretara los switches del control.
        </p>
        <div className="mt-6">
          <Puntos
            items={[
              "Programé la placa Arduino para reconocer los inputs de los switches.",
              "Flasheé la memoria de la placa con el nuevo firmware.",
              "Desarrollé una aplicación en .NET para detectar el control arcade.",
              "Implementé un sistema visual que muestra en tiempo real qué botones se están presionando.",
            ]}
          />
        </div>
      </Seccion>

      <Seccion titulo="Contexto">
        <Dato titulo="¿Qué es un arcade controller?">
          <p>
            Una adaptación de los tableros de máquinas recreativas para consolas
            o PC. Su uso se popularizó en la escena competitiva de juegos de
            pelea, donde muchos profesionales los prefieren frente a los mandos
            de consola.
          </p>
        </Dato>
        <Dato titulo="¿Qué es flashear?">
          <p>
            Instalar o reemplazar el firmware de un dispositivo mediante un
            proceso de carga en su memoria flash.
          </p>
        </Dato>
      </Seccion>
    </main>
  );
}
