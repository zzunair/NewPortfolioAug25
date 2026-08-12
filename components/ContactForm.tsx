"use client";

import { useState, type FormEvent } from "react";

const PROJECT_TYPES = [
  { value: "build", label: "Store Build" },
  { value: "migration", label: "Migration" },
  { value: "app", label: "App Development" },
  { value: "cro", label: "CRO" },
  { value: "retainer", label: "Retainer" },
  { value: "other", label: "Other" },
];

const BUDGET_RANGES = [
  { value: "1-5k", label: "$1k – $5k" },
  { value: "5-15k", label: "$5k – $15k" },
  { value: "15-30k", label: "$15k – $30k" },
  { value: "30k+", label: "$30k+" },
  { value: "retainer-monthly", label: "Monthly retainer" },
];

const inputClass =
  "rounded-md border border-border bg-card px-4 py-3.5 text-sm text-text placeholder:text-muted focus:border-accent focus:outline-none";

export default function ContactForm({ showBudget = false }: { showBudget?: boolean }) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [form, setForm] = useState({
    name: "",
    email: "",
    storeUrl: "",
    projectType: "",
    budget: "",
    message: "",
  });

  const update = (field: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [field]: e.target.value }));

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.message || "Something went wrong. Please try again.");
      }
      setStatus("success");
      setForm({ name: "", email: "", storeUrl: "", projectType: "", budget: "", message: "" });
    } catch (err) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <input
        type="text"
        placeholder="Name"
        required
        value={form.name}
        onChange={update("name")}
        className={inputClass}
      />
      <input
        type="email"
        placeholder="Email"
        required
        value={form.email}
        onChange={update("email")}
        className={inputClass}
      />
      <input
        type="text"
        placeholder="Store URL"
        value={form.storeUrl}
        onChange={update("storeUrl")}
        className={inputClass}
      />
      <select value={form.projectType} onChange={update("projectType")} className={inputClass}>
        <option value="">Project type</option>
        {PROJECT_TYPES.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
      {showBudget && (
        <select value={form.budget} onChange={update("budget")} className={inputClass}>
          <option value="">Budget range</option>
          {BUDGET_RANGES.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      )}
      <textarea
        placeholder="Message"
        required
        rows={4}
        value={form.message}
        onChange={update("message")}
        className={`${inputClass} resize-vertical`}
      />
      <button
        type="submit"
        disabled={status === "loading"}
        className="rounded-md bg-accent px-4 py-4 text-[15px] font-semibold text-bg transition-shadow hover:shadow-[0_0_20px_rgba(0,212,255,0.4)] disabled:opacity-60"
      >
        {status === "loading" ? "Sending…" : "Send message"}
      </button>
      {status === "success" && (
        <p className="text-center font-mono text-sm text-accent">
          Thanks — I&apos;ll get back to you within 4 hours.
        </p>
      )}
      {status === "error" && (
        <p className="text-center font-mono text-sm text-red-400">{errorMessage}</p>
      )}
    </form>
  );
}
