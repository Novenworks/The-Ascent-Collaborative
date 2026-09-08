"use client";
import { useState } from "react";
const BOOK = "https://theascentcollab.com/book-now";
export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5 md:px-8">
        <a href="/" className="flex items-baseline gap-2 text-paper">
          <span className="font-display text-xl tracking-tight">Ascent</span>
          <span className="hidden text-[10px] uppercase tracking-[0.22em] text-muted sm:inline">Collaborative</span>
        </a>
        <nav className="hidden items-center gap-7 text-[11px] uppercase tracking-[0.18em] text-paper/80 md:flex">
          <a href="#start" className="hover:text-copper">Start</a>
          <a href="#stack" className="hover:text-copper">Technologies</a>
          <a href="#collaborative" className="hover:text-copper">Collaborative</a>
          <a href="https://theascentcollab.com/about" className="hover:text-copper">About</a>
          <a href={BOOK} className="bg-copper px-4 py-2 font-semibold text-ink">Consultation</a>
        </nav>
        <button type="button" className="border border-paper/30 px-3 py-2 text-[11px] uppercase tracking-[0.16em] md:hidden" onClick={() => setOpen((v) => !v)} aria-expanded={open}>Menu</button>
      </div>
      {open && (
        <div className="border-t border-line bg-ink px-5 py-4 md:hidden">
          <div className="flex flex-col gap-3 text-sm uppercase tracking-[0.16em]">
            <a href="#start" onClick={() => setOpen(false)}>Start</a>
            <a href="#stack" onClick={() => setOpen(false)}>Technologies</a>
            <a href="#collaborative" onClick={() => setOpen(false)}>Collaborative</a>
            <a href={BOOK}>Consultation</a>
          </div>
        </div>
      )}
    </header>
  );
}
