import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/layout-components/header-components/header";
import "./globals.css";
import { outfit } from "./fonts";

export const metadata: Metadata = {
  title: "Portafolio Serch",
  description: "Portafolio creado con NextJS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className={` ${outfit.className} antialiased `}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main className="background-color text-foreground">
            <Header />
            <div className="flex-grow pt-30 pb-10 px-4 sm:px-8 md:px-20 lg:px-30 snap-y snap-mandatory h-screen overflow-y-scroll scroll-smooth ">
              {children}
            </div>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
