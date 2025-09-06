import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/layout-components/header-components/header";
import "./globals.css";
import { outfit } from "./fonts";
import { Toaster } from "sonner";

export const metadata: Metadata = {
  title: "Portafolio Serch",
  description: "Portafolio creado con NextJS",
  icons: {
    icon: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className={`${outfit.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <main className="background-color text-foreground">
            <Header />
            <div className="pt-30 pb-10 px-4 sm:px-8 md:px-20 lg:px-30 h-screen overflow-y-scroll scroll-smooth md:snap-y md:snap-mandatory">
              {children}
              <Toaster position="top-center" className="bg-background" />
            </div>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
