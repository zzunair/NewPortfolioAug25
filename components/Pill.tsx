export default function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-md border border-accent/30 px-3.5 py-2 font-mono text-xs text-accent">
      {children}
    </span>
  );
}
