export default function Pill({ children }: { children: React.ReactNode }) {
  return (
    <li className="rounded-md border border-border bg-secondary px-2.5 py-1 font-mono text-xs text-muted-foreground">
      {children}
    </li>
  );
}
