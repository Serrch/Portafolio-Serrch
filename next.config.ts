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
        source: "/stats/script.js",
        destination: "https://cloud.umami.is/script.js",
      },
      {
        source: "/stats/api/send",
        destination: "https://cloud.umami.is/api/send",
      },
    ];
  },
};

export default nextConfig;
