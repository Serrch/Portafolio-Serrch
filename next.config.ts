import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
// };

// const nextConfig: NextConfig = {
//   async rewrites() {
//     return [
//       {
//         source: "/stats/script.js",
//         destination: "https://cloud.umami.is/script.js",
//       },
//       {
//         source: "/stats/send",
//         destination: "https://cloud.umami.is/api/send",
//       },
//     ];
//   },
// };

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/umami/script.js",
        destination: "https://cloud.umami.is/script.js",
      },
      {
        source: "/umami/api/send",
        destination: "https://cloud.umami.is/api/send",
      },
    ];
  },
  async redirects() {
    return [
      // El idioma vive en la ruta, asi que la raiz no tiene pagina propia.
      { source: "/", destination: "/es", permanent: false },
      // Los detalles de proyecto vivian sin prefijo: los enlaces ya compartidos
      // siguen funcionando.
      {
        source: "/proyectos/:path*",
        destination: "/es/proyectos/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
