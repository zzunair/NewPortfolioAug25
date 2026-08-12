import type { FaqItem } from "@/lib/data/faq";

export default function FaqList({ items }: { items: FaqItem[] }) {
  return (
    <div className="flex flex-col gap-9">
      {items.map((item) => (
        <div key={item.question}>
          <h3 className="mb-2.5 text-lg font-semibold text-text">{item.question}</h3>
          <p className="text-[15px] leading-relaxed text-muted">{item.answer}</p>
        </div>
      ))}
    </div>
  );
}
