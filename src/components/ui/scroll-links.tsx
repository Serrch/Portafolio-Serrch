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
  const isHome = pathname === "/";

  if (isHome && href.startsWith("/#")) {
    const id = href.replace("/#", "");
    return (
      <a
        href={href}
        className={className}
        {...props}
        onClick={(e) => {
          e.preventDefault();
          document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
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
