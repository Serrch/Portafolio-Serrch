import type { Locale } from "./config";

/**
 * Texto corto de la interfaz. Vive separado de `content` porque los componentes
 * cliente lo importan: lo que entre aqui viaja al navegador en los dos idiomas.
 */
const es = {
  nav: {
    "sobre-mi": "Sobre mí",
    experiencia: "Experiencia",
    proyectos: "Proyectos",
    educacion: "Educación",
    stack: "Stack",
    contacto: "Contacto",
  },
  header: {
    contactar: "Contactar",
    menu: "Navegación",
    menuDesc: "Menú lateral con enlaces de navegación del portafolio.",
    otroIdioma: "EN",
    cambiarIdioma: "Ver el portafolio en inglés",
  },
  botones: {
    descargarCV: "Descargar CV",
    codigo: "Código",
    verProyecto: "Ver proyecto",
    visitarSitio: "Visitar sitio",
    verCertificado: "Ver certificado",
    enviarCorreo: "Enviar correo",
    volverProyectos: "Proyectos",
  },
  estado: {
    done: "Terminado",
    "in-progress": "En proceso",
    remake: "Remake en proceso",
  },
  formacion: {
    degree: "Título",
    certification: "Certificación",
    course: "Curso",
  },
  secciones: {
    sobreMi: { eyebrow: "Perfil", title: "Sobre mí" },
    experiencia: {
      eyebrow: "Trayectoria",
      title: "Experiencia",
      meta: "puestos",
      actualidad: "Actualidad",
    },
    proyectos: {
      eyebrow: "Trabajo",
      title: "Proyectos profesionales",
      meta: "proyectos",
      personales: "Proyectos personales",
      enDesarrollo: "En desarrollo",
      captura: "Captura de",
    },
    educacion: { eyebrow: "Formación", title: "Educación" },
    stack: {
      eyebrow: "Herramientas",
      title: "Tech stack",
      hint: "Toca cualquier tecnología para ver cómo la uso.",
      lenguajes: "Lenguajes",
      frameworks: "Frameworks y librerías",
      bases: "Bases de datos",
      otros: "Herramientas y entorno",
    },
    contacto: { eyebrow: "Contacto", correo: "Correo" },
  },
  contacto: {
    copiar: "Copiar correo",
    copiado: "Correo copiado",
  },
  cv: { href: "/cv-es.pdf", nombre: "CV_Sergio_Enrique_Perez_Rivas.pdf" },
};

const en: typeof es = {
  nav: {
    "sobre-mi": "About",
    experiencia: "Experience",
    proyectos: "Projects",
    educacion: "Education",
    stack: "Stack",
    contacto: "Contact",
  },
  header: {
    contactar: "Get in touch",
    menu: "Navigation",
    menuDesc: "Side menu with the portfolio navigation links.",
    otroIdioma: "ES",
    cambiarIdioma: "View the portfolio in Spanish",
  },
  botones: {
    descargarCV: "Download CV",
    codigo: "Code",
    verProyecto: "View project",
    visitarSitio: "Visit site",
    verCertificado: "View certificate",
    enviarCorreo: "Send email",
    volverProyectos: "Projects",
  },
  estado: {
    done: "Done",
    "in-progress": "In progress",
    remake: "Remake in progress",
  },
  formacion: {
    degree: "Degree",
    certification: "Certification",
    course: "Course",
  },
  secciones: {
    sobreMi: { eyebrow: "Profile", title: "About me" },
    experiencia: {
      eyebrow: "Career",
      title: "Experience",
      meta: "roles",
      actualidad: "Present",
    },
    proyectos: {
      eyebrow: "Work",
      title: "Professional projects",
      meta: "projects",
      personales: "Personal projects",
      enDesarrollo: "In development",
      captura: "Screenshot of",
    },
    educacion: { eyebrow: "Education", title: "Education" },
    stack: {
      eyebrow: "Tools",
      title: "Tech stack",
      hint: "Tap any technology to see how I use it.",
      lenguajes: "Languages",
      frameworks: "Frameworks and libraries",
      bases: "Databases",
      otros: "Tools and environment",
    },
    contacto: { eyebrow: "Contact", correo: "Email" },
  },
  contacto: {
    copiar: "Copy email",
    copiado: "Email copied",
  },
  cv: { href: "/cv-en.pdf", nombre: "CV_Sergio_Enrique_Perez_Rivas_EN.pdf" },
};

export const ui: Record<Locale, typeof es> = { es, en };
