export default function Eyebrow({ children }: { children: React.ReactNode }) {
  return <span className="font-mono text-[12px] text-accent">/ {children}</span>;
}
