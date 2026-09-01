"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function ScrollLink({
  href,
  children,
  className,
  ...props
}: React.AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }) {
  const pathname = usePathname();
  // El href ya trae el idioma ("/es#contacto"): si la ruta actual es esa misma
  // pagina, el salto es scroll suave en vez de navegacion.
  const [ruta, ancla] = href.split("#");

  if (ancla && pathname === ruta) {
    return (
      <a
        href={href}
        className={className}
        {...props}
        onClick={(e) => {
          e.preventDefault();
          document.getElementById(ancla)?.scrollIntoView({ behavior: "smooth" });
          props.onClick?.(e);
        }}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={className} {...props}>
      {children}
    </Link>
  );
}
