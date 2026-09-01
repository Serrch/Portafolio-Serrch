import type { Locale } from "./config";

/**
 * Prosa larga: portada, secciones narrativas y paginas de detalle. Solo la
 * importan componentes de servidor, asi que puede llevar JSX y no pesa en el
 * bundle del navegador. El texto corto de la interfaz vive en `ui.ts`.
 */
const es = {
  meta: {
    title: "Sergio Pérez Rivas | Desarrollador Fullstack",
    description:
      "Ingeniero en Software y Desarrollador Fullstack. Construyo plataformas web y APIs con TypeScript, React, Next.js, .NET, Python y PostgreSQL. Portafolio, experiencia y CV.",
    short:
      "Ingeniero en Software y Desarrollador Fullstack. TypeScript, React, Next.js, .NET, Python y PostgreSQL.",
    keywords: [
      "Sergio Pérez Rivas",
      "Desarrollador Fullstack",
      "Ingeniero en Software",
      "TypeScript",
      "React",
      "Next.js",
      ".NET",
      "PostgreSQL",
      "FastAPI",
    ],
    siteName: "Sergio Pérez Rivas — Desarrollador Fullstack",
    ogLocale: "es_MX",
  },
  og: {
    antetitulo: "Portafolio",
    subtitulo: "Ingeniero en Software · Desarrollador Fullstack",
    alt: "Sergio Pérez Rivas — Desarrollador Fullstack",
  },
  hero: {
    rol: "Desarrollador Fullstack",
    resumen:
      "Ingeniero en Software. Construyo plataformas web y APIs con TypeScript, React, Next.js, .NET, Python y PostgreSQL.",
    stackLabel: "Stack principal",
    fotoAlt: "Sergio Enrique Pérez Rivas",
  },
  sobreMi: {
    parrafos: [
      "Soy Ingeniero en Software y Desarrollador Fullstack con experiencia profesional en desarrollo web, plataformas empresariales y aplicaciones multiplataforma.",
      "Me especializo en construir soluciones escalables con TypeScript, React, Next.js y PostgreSQL, integrando backends robustos con interfaces funcionales y bien estructuradas. Aplico principios de Clean Code y SOLID para garantizar calidad y mantenibilidad en cada proyecto.",
      "He trabajado en entornos de mejora continua, soporte de plataformas ERP, sistemas financieros y aplicaciones con despliegue en entornos cloud como Vercel y Supabase.",
    ],
    resumen: {
      experiencia: "Experiencia",
      desde: "Desde",
      enfoque: "Enfoque",
      enfoqueValor: "Plataformas empresariales, APIs REST, apps multiplataforma",
      formacion: "Formación",
    },
  },
  contacto: {
    titulo: "¿Trabajamos juntos?",
    texto:
      "Estoy abierto a oportunidades como Desarrollador Fullstack. Escríbeme y te respondo a la brevedad.",
  },
  detalle: {
    miTrabajo: "Mi trabajo",
    contexto: "Contexto",
    arquitectura: "Arquitectura",
  },
  proyectos: {
    "street-fighter-api": {
      meta: {
        title: "Street Fighter API",
        description:
          "API REST en Node y Express que recopila las versiones de cada personaje de Street Fighter a lo largo de la saga.",
      },
      titulo: "Street Fighter API",
      cabecera: "Proyecto personal · Abril 2024 — Mayo 2025",
      lead: (
        <p>
          API REST que almacena las distintas versiones de los personajes de
          Street Fighter a lo largo de los juegos de la saga. Surge de mi interés
          en los videojuegos de pelea y de que no existía una API que recopilara
          no solo el personaje, sino todas sus versiones.
        </p>
      ),
      galeria: [
        {
          alt: "Vista de la documentación de la Street Fighter API",
          pie: "Documentación de la API.",
        },
        {
          alt: "Respuesta JSON de un endpoint de la Street Fighter API",
          pie: "Respuesta de un endpoint con las versiones de un personaje.",
        },
      ],
      trabajo: (
        <>
          Estructuré la información de los personajes en una base de datos con
          dos entidades principales, <strong>fighters</strong> y{" "}
          <strong>games</strong>. A partir de ellas diseñé la tabla intermedia{" "}
          <strong>fighter_versions</strong>, que normaliza la base y facilita las
          consultas con las tablas complementarias.
        </>
      ),
      puntos: [
        "Creé la base de datos con las tablas fighters, games, fighter_versions, fighter_images y fighter_moves.",
        "Implementé el ORM Sequelize para la gestión de datos y la optimización de consultas.",
        "Apliqué el modelo MVC para estructurar el flujo de las peticiones HTTP.",
        "Diseñé un sistema de gestión de archivos que sirve las imágenes directamente desde el servidor de la API.",
      ],
      contexto: [
        {
          titulo: "¿Qué es Street Fighter?",
          texto: (
            <p>
              Una saga de videojuegos de lucha en 2D con personajes como Ryu,
              Ken, Chun-Li o Guile. Se consolidó como referente del género al
              introducir buena parte de las mecánicas que hoy lo definen.
            </p>
          ),
        },
      ],
    },
    "arcade-tester": {
      meta: {
        title: "Arcade Tester",
        description:
          "Aplicación de escritorio en .NET para reconocer y probar los inputs de un control arcade construido con Arduino.",
      },
      titulo: "Arcade Tester",
      cabecera: "Proyecto personal · Abril 2023",
      lead: (
        <p>
          Aplicación en .NET y Arduino que reconoce y prueba los inputs de un
          control arcade. Se apoya en la librería SharpDX para que los
          aficionados validen sus controles y corrijan botones mal mapeados sin
          tener que abrir un juego.
        </p>
      ),
      galeria: [
        {
          alt: "Arcade Tester detectando los inputs del control en tiempo real",
          pie: "La aplicación marca cada botón en el momento en que se presiona.",
        },
        {
          alt: "Diagrama de conexión entre los switches del control y la placa Arduino",
          pie: "Diagrama de conexión de los switches a la placa.",
        },
        {
          alt: "Vista del layout de botones en la aplicación",
          pie: "Layout de botones dentro de la aplicación.",
        },
        {
          alt: "Segunda vista del layout de botones en la aplicación",
          pie: "",
        },
      ],
      trabajo: (
        <>
          Diseñé con SharpDX un puente que permite a .NET detectar un control
          arcade construido con Arduino. Como SharpDX solo reconoce entradas
          DInput y XInput, fue necesario flashear el firmware de la placa e
          implementar el código que interpretara los switches del control.
        </>
      ),
      puntos: [
        "Programé la placa Arduino para reconocer los inputs de los switches.",
        "Flasheé la memoria de la placa con el nuevo firmware.",
        "Desarrollé una aplicación en .NET para detectar el control arcade.",
        "Implementé un sistema visual que muestra en tiempo real qué botones se están presionando.",
      ],
      contexto: [
        {
          titulo: "¿Qué es un arcade controller?",
          texto: (
            <p>
              Una adaptación de los tableros de máquinas recreativas para
              consolas o PC. Su uso se popularizó en la escena competitiva de
              juegos de pelea, donde muchos profesionales los prefieren frente a
              los mandos de consola.
            </p>
          ),
        },
        {
          titulo: "¿Qué es flashear?",
          texto: (
            <p>
              Instalar o reemplazar el firmware de un dispositivo mediante un
              proceso de carga en su memoria flash.
            </p>
          ),
        },
      ],
    },
    "api-condusef-refactor": {
      meta: {
        title: "API Condusef — Refactorización",
        description:
          "Refactorización de la API .NET que comunica a las instituciones financieras con los sistemas REDECO y REUNE de CONDUSEF.",
      },
      titulo: "API Condusef — Refactorización",
      cabecera: "Radical Software · Diciembre 2024 — Marzo 2025",
      lead: (
        <p>
          API propia de Radical Software que actúa como intermediaria entre las
          instituciones financieras y la API oficial de CONDUSEF. Nace de la
          necesidad de ofrecer un medio más amigable para gestionar localmente
          los trámites de REDECO y REUNE.
        </p>
      ),
      trabajo: (
        <>
          Refactoricé los distintos módulos responsables de las operaciones CRUD
          de la API, tanto a nivel local como en la comunicación con la API del
          Gobierno.
        </>
      ),
      puntos: [
        "Refactoricé el flujo completo de la aplicación: controladores, servicios y capa de acceso a datos.",
        "Diseñé interfaces para las clases clave, aplicando principios SOLID.",
        "Implementé el ORM Dapper para optimizar la gestión de datos y el rendimiento en consultas.",
        "Desarrollé stored procedures para estandarizar las operaciones de acceso a base de datos.",
        "Definí un formato unificado de respuestas para asegurar la consistencia de la API.",
      ],
      contexto: [
        {
          titulo: "¿Qué es CONDUSEF?",
          texto: (
            <p>
              Es una institución del Gobierno de México encargada de proteger y
              defender los derechos de los usuarios de servicios financieros,
              como bancos, aseguradoras o Afores.
            </p>
          ),
        },
        {
          titulo: "¿Qué es la API CONDUSEF?",
          texto: (
            <p>
              Una interfaz que permite a las instituciones financieras
              intercambiar datos de forma segura con la entidad. Opera con dos
              sistemas: <strong>REDECO</strong>, recepción de quejas, y{" "}
              <strong>REUNE</strong>, recepción de trámites como aclaraciones,
              reclamaciones y consultas.
            </p>
          ),
        },
      ],
    },
    "api-condusef-ui": {
      meta: {
        title: "API Condusef — Nueva UI",
        description:
          "Migración de Blazor a Next.js de la interfaz que consume la API Condusef: tablas y formularios dinámicos para los trámites de REDECO y REUNE.",
      },
      titulo: "API Condusef — Nueva UI",
      cabecera: "Radical Software · Marzo 2025 — Junio 2025",
      lead: (
        <p>
          Aplicación frontend en Next.js, React y TypeScript que consume la API
          de CONDUSEF ya refactorizada. Presenta la información en tablas y
          formularios dinámicos, uno por cada trámite que los usuarios pueden
          realizar en la plataforma oficial.
        </p>
      ),
      trabajo: (
        <>
          Establecí la base técnica del proyecto: las estructuras principales que
          se usarían durante el desarrollo, desde el layout hasta la integración
          con el backend y el diseño de formularios e inputs dinámicos.
        </>
      ),
      puntos: [
        "Configuré el enrutado de las secciones REDECO y REUNE.",
        "Diseñé las tablas correspondientes a cada tipo de trámite.",
        "Creé formularios dinámicos adaptados al trámite, con inputs personalizados para cada caso.",
        "Implementé la función que identifica el tipo de trámite y muestra la tabla y los inputs que le tocan.",
        "Desarrollé los DTOs para transformar los formularios en objetos válidos para la API.",
      ],
      contexto: [
        {
          titulo: "¿Qué es CONDUSEF?",
          texto: (
            <p>
              Es una institución del Gobierno de México encargada de proteger y
              defender los derechos de los usuarios de servicios financieros,
              como bancos, aseguradoras o Afores.
            </p>
          ),
        },
        {
          titulo: "¿Qué es la API CONDUSEF?",
          texto: (
            <p>
              Una interfaz que permite a las instituciones financieras
              intercambiar datos de forma segura con la entidad. Opera con dos
              sistemas: <strong>REDECO</strong>, recepción de quejas, y{" "}
              <strong>REUNE</strong>, recepción de trámites como aclaraciones,
              reclamaciones y consultas.
            </p>
          ),
        },
      ],
    },
    "face-recognition-api": {
      meta: {
        title: "Face Recognition API",
        description:
          "API de control de acceso biométrico para gimnasios con FastAPI y PostgreSQL: registro de socios, reconocimiento facial y asistencia en tiempo real.",
      },
      titulo: "Face Recognition API",
      cabecera: "Velarizon · Abril 2026 — Julio 2026",
      lead: (
        <p>
          Control de acceso biométrico. Solución completa que abarca desde el
          registro de nuevos clientes en el gimnasio hasta la gestión de
          membresías y accesos mediante modelos de reconocimiento facial. La API,
          construida con FastAPI y PostgreSQL, es el núcleo del sistema: sirve
          tanto a la app móvil en Expo como a la de escritorio en PySide6.
        </p>
      ),
      galeria: [
        {
          alt: "Pantalla de check-in en la puerta del gimnasio con el rostro detectado",
          pie: "Check-in en puerta: la cámara detecta el rostro y confirma el acceso sin que el socio tenga que hacer nada más.",
        },
        {
          alt: "Ficha del socio con su ciclo de membresía y el calendario de visitas del mes",
          pie: "Ficha del socio tras el acceso: estado de la membresía, próximo pago y calendario de visitas del mes.",
        },
      ],
      puntos: [
        "Diseñé el modelo relacional en PostgreSQL para socios, membresías y registros de asistencia.",
        "Construí la API con FastAPI: alta y baja de socios, alta de rostros y consulta de asistencia.",
        "Integré el reconocimiento facial: la API recibe la captura, obtiene el vector del rostro y lo compara contra los socios registrados.",
        "Expuse el registro de asistencia en tiempo real para que ambos clientes reflejen el acceso al momento.",
        "Documenté los endpoints y validé cada uno antes de conectarlos con los clientes.",
      ],
      arquitectura: [
        {
          nombre: "API",
          stack: "FastAPI · PostgreSQL",
          texto:
            "Núcleo del sistema. Concentra el modelo de datos, el reconocimiento facial y las reglas de acceso; los dos clientes solo consumen sus endpoints.",
        },
        {
          nombre: "App móvil",
          stack: "React Native (Expo)",
          texto:
            "Captura el rostro desde la cámara del teléfono y consulta la asistencia. Pensada para el personal que se mueve dentro del gimnasio.",
        },
        {
          nombre: "Escritorio",
          stack: "PySide6",
          texto:
            "Puesto fijo en recepción: registra socios, toma la foto de alta y controla el acceso durante la operación diaria.",
        },
      ],
    },
  },
};

const en: typeof es = {
  meta: {
    title: "Sergio Pérez Rivas | Fullstack Developer",
    description:
      "Software Engineer and Fullstack Developer. I build web platforms and APIs with TypeScript, React, Next.js, .NET, Python and PostgreSQL. Portfolio, experience and CV.",
    short:
      "Software Engineer and Fullstack Developer. TypeScript, React, Next.js, .NET, Python and PostgreSQL.",
    keywords: [
      "Sergio Pérez Rivas",
      "Fullstack Developer",
      "Software Engineer",
      "TypeScript",
      "React",
      "Next.js",
      ".NET",
      "PostgreSQL",
      "FastAPI",
    ],
    siteName: "Sergio Pérez Rivas — Fullstack Developer",
    ogLocale: "en_US",
  },
  og: {
    antetitulo: "Portfolio",
    subtitulo: "Software Engineer · Fullstack Developer",
    alt: "Sergio Pérez Rivas — Fullstack Developer",
  },
  hero: {
    rol: "Fullstack Developer",
    resumen:
      "Software Engineer. I build web platforms and APIs with TypeScript, React, Next.js, .NET, Python and PostgreSQL.",
    stackLabel: "Core stack",
    fotoAlt: "Sergio Enrique Pérez Rivas",
  },
  sobreMi: {
    parrafos: [
      "I am a Software Engineer and Fullstack Developer with professional experience in web development, enterprise platforms and cross-platform applications.",
      "I specialize in building scalable solutions with TypeScript, React, Next.js and PostgreSQL, pairing solid backends with functional, well-structured interfaces. I apply Clean Code and SOLID principles to keep quality and maintainability in every project.",
      "I have worked in continuous-improvement environments, supporting ERP platforms, financial systems and applications deployed to cloud services such as Vercel and Supabase.",
    ],
    resumen: {
      experiencia: "Experience",
      desde: "Since",
      enfoque: "Focus",
      enfoqueValor: "Enterprise platforms, REST APIs, cross-platform apps",
      formacion: "Education",
    },
  },
  contacto: {
    titulo: "Shall we work together?",
    texto:
      "I am open to Fullstack Developer opportunities. Drop me a line and I will get back to you shortly.",
  },
  detalle: {
    miTrabajo: "My work",
    contexto: "Context",
    arquitectura: "Architecture",
  },
  proyectos: {
    "street-fighter-api": {
      meta: {
        title: "Street Fighter API",
        description:
          "REST API in Node and Express that collects every version of each Street Fighter character across the series.",
      },
      titulo: "Street Fighter API",
      cabecera: "Personal project · April 2024 — May 2025",
      lead: (
        <p>
          REST API that stores the different versions of the Street Fighter
          characters across the games in the series. It came out of my interest
          in fighting games and the fact that no API collected not just the
          character, but all of their versions.
        </p>
      ),
      galeria: [
        {
          alt: "View of the Street Fighter API documentation",
          pie: "API documentation.",
        },
        {
          alt: "JSON response from a Street Fighter API endpoint",
          pie: "Endpoint response with the versions of a character.",
        },
      ],
      trabajo: (
        <>
          I structured the character data into a database with two main
          entities, <strong>fighters</strong> and <strong>games</strong>. From
          those I designed the join table <strong>fighter_versions</strong>,
          which normalizes the database and simplifies the queries against the
          supporting tables.
        </>
      ),
      puntos: [
        "Built the database with the fighters, games, fighter_versions, fighter_images and fighter_moves tables.",
        "Implemented the Sequelize ORM for data handling and query optimization.",
        "Applied the MVC pattern to structure the flow of HTTP requests.",
        "Designed a file management system that serves the images straight from the API server.",
      ],
      contexto: [
        {
          titulo: "What is Street Fighter?",
          texto: (
            <p>
              A 2D fighting game series with characters such as Ryu, Ken, Chun-Li
              and Guile. It became a landmark of the genre by introducing many of
              the mechanics that define it today.
            </p>
          ),
        },
      ],
    },
    "arcade-tester": {
      meta: {
        title: "Arcade Tester",
        description:
          "A .NET desktop application that detects and tests the inputs of an arcade controller built with Arduino.",
      },
      titulo: "Arcade Tester",
      cabecera: "Personal project · April 2023",
      lead: (
        <p>
          A .NET and Arduino application that detects and tests the inputs of an
          arcade controller. It builds on the SharpDX library so enthusiasts can
          validate their sticks and fix badly mapped buttons without having to
          open a game.
        </p>
      ),
      galeria: [
        {
          alt: "Arcade Tester detecting the controller inputs in real time",
          pie: "The application highlights each button the moment it is pressed.",
        },
        {
          alt: "Wiring diagram between the controller switches and the Arduino board",
          pie: "Wiring diagram of the switches to the board.",
        },
        {
          alt: "View of the button layout inside the application",
          pie: "Button layout inside the application.",
        },
        {
          alt: "Second view of the button layout inside the application",
          pie: "",
        },
      ],
      trabajo: (
        <>
          Using SharpDX I designed a bridge that lets .NET detect an arcade
          controller built with Arduino. Since SharpDX only recognizes DInput and
          XInput devices, I had to flash the board firmware and write the code
          that interprets the controller switches.
        </>
      ),
      puntos: [
        "Programmed the Arduino board to recognize the switch inputs.",
        "Flashed the board memory with the new firmware.",
        "Built a .NET application to detect the arcade controller.",
        "Implemented a visual system that shows in real time which buttons are being pressed.",
      ],
      contexto: [
        {
          titulo: "What is an arcade controller?",
          texto: (
            <p>
              An adaptation of arcade cabinet panels for consoles or PC. They
              became popular in the competitive fighting game scene, where many
              professionals prefer them over console gamepads.
            </p>
          ),
        },
        {
          titulo: "What does flashing mean?",
          texto: (
            <p>
              Installing or replacing the firmware of a device by writing it into
              its flash memory.
            </p>
          ),
        },
      ],
    },
    "api-condusef-refactor": {
      meta: {
        title: "Condusef API — Refactor",
        description:
          "Refactor of the .NET API that connects financial institutions with the REDECO and REUNE systems of CONDUSEF.",
      },
      titulo: "Condusef API — Refactor",
      cabecera: "Radical Software · December 2024 — March 2025",
      lead: (
        <p>
          Radical Software own API, acting as a middleman between financial
          institutions and the official CONDUSEF API. It exists to offer a
          friendlier way to handle REDECO and REUNE filings locally.
        </p>
      ),
      trabajo: (
        <>
          I refactored the modules responsible for the CRUD operations of the
          API, both locally and in the communication with the government API.
        </>
      ),
      puntos: [
        "Refactored the full application flow: controllers, services and data access layer.",
        "Designed interfaces for the key classes, applying SOLID principles.",
        "Implemented the Dapper ORM to improve data handling and query performance.",
        "Wrote stored procedures to standardize the database access operations.",
        "Defined a unified response format to keep the API consistent.",
      ],
      contexto: [
        {
          titulo: "What is CONDUSEF?",
          texto: (
            <p>
              A Mexican government institution in charge of protecting and
              defending the rights of financial services users, covering banks,
              insurers and retirement funds.
            </p>
          ),
        },
        {
          titulo: "What is the CONDUSEF API?",
          texto: (
            <p>
              An interface that lets financial institutions exchange data
              securely with the institution. It runs two systems:{" "}
              <strong>REDECO</strong>, for complaints, and{" "}
              <strong>REUNE</strong>, for filings such as clarifications, claims
              and enquiries.
            </p>
          ),
        },
      ],
    },
    "api-condusef-ui": {
      meta: {
        title: "Condusef API — New UI",
        description:
          "Blazor to Next.js migration of the interface that consumes the Condusef API: dynamic tables and forms for the REDECO and REUNE filings.",
      },
      titulo: "Condusef API — New UI",
      cabecera: "Radical Software · March 2025 — June 2025",
      lead: (
        <p>
          Frontend application in Next.js, React and TypeScript that consumes the
          refactored CONDUSEF API. It presents the data in dynamic tables and
          forms, one per filing type available on the official platform.
        </p>
      ),
      trabajo: (
        <>
          I set the technical foundation of the project: the main structures used
          throughout development, from the layout to the backend integration and
          the design of dynamic forms and inputs.
        </>
      ),
      puntos: [
        "Set up the routing for the REDECO and REUNE sections.",
        "Designed the tables matching each filing type.",
        "Built dynamic forms tailored to each filing, with custom inputs per case.",
        "Implemented the function that identifies the filing type and renders its matching table and inputs.",
        "Wrote the DTOs that turn the forms into objects the API accepts.",
      ],
      contexto: [
        {
          titulo: "What is CONDUSEF?",
          texto: (
            <p>
              A Mexican government institution in charge of protecting and
              defending the rights of financial services users, covering banks,
              insurers and retirement funds.
            </p>
          ),
        },
        {
          titulo: "What is the CONDUSEF API?",
          texto: (
            <p>
              An interface that lets financial institutions exchange data
              securely with the institution. It runs two systems:{" "}
              <strong>REDECO</strong>, for complaints, and{" "}
              <strong>REUNE</strong>, for filings such as clarifications, claims
              and enquiries.
            </p>
          ),
        },
      ],
    },
    "face-recognition-api": {
      meta: {
        title: "Face Recognition API",
        description:
          "Biometric access control API for gyms with FastAPI and PostgreSQL: member registration, face recognition and real-time attendance.",
      },
      titulo: "Face Recognition API",
      cabecera: "Velarizon · April 2026 — July 2026",
      lead: (
        <p>
          Biometric access control. A complete solution covering everything from
          registering new gym members to managing memberships and entries through
          face recognition models. The API, built with FastAPI and PostgreSQL, is
          the core of the system: it serves both the Expo mobile app and the
          PySide6 desktop app.
        </p>
      ),
      galeria: [
        {
          alt: "Check-in screen at the gym door with the detected face",
          pie: "Check-in at the door: the camera detects the face and confirms entry without the member doing anything else.",
        },
        {
          alt: "Member profile with the membership cycle and the visit calendar for the month",
          pie: "Member profile after entry: membership status, next payment and the visit calendar for the month.",
        },
      ],
      puntos: [
        "Designed the relational model in PostgreSQL for members, memberships and attendance records.",
        "Built the API with FastAPI: member sign-up and removal, face enrollment and attendance queries.",
        "Integrated face recognition: the API receives the capture, extracts the face vector and matches it against the registered members.",
        "Exposed attendance in real time so both clients reflect the entry immediately.",
        "Documented the endpoints and validated each one before wiring the clients to them.",
      ],
      arquitectura: [
        {
          nombre: "API",
          stack: "FastAPI · PostgreSQL",
          texto:
            "Core of the system. It holds the data model, the face recognition and the access rules; both clients only consume its endpoints.",
        },
        {
          nombre: "Mobile app",
          stack: "React Native (Expo)",
          texto:
            "Captures the face from the phone camera and checks attendance. Meant for staff moving around the gym.",
        },
        {
          nombre: "Desktop",
          stack: "PySide6",
          texto:
            "Fixed station at the front desk: registers members, takes the enrollment photo and controls entry during daily operation.",
        },
      ],
    },
  },
};

export const content: Record<Locale, typeof es> = { es, en };
