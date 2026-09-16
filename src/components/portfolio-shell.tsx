import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/92 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-screen-2xl items-center justify-between px-5 md:h-20 md:px-10">
        <Link to="/" className="font-sans text-sm font-bold tracking-normal text-foreground">
          ANANYA SINGH
        </Link>
        <nav aria-label="Main navigation" className="flex items-center gap-4 text-xs uppercase md:gap-8">
          <Link to="/" hash="work" className="nav-link">Work</Link>
          <Link to="/" hash="about" className="nav-link">About</Link>
          <Link to="/" hash="contact" className="nav-link">Contact</Link>
        </nav>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background px-5 py-8 md:px-10 md:py-10">
      <div className="mx-auto grid max-w-screen-2xl gap-6 md:grid-cols-3 md:items-end">
        <div>
          <p className="text-sm font-bold">ANANYA SINGH</p>
          <p className="mt-1 text-xs uppercase text-muted-foreground">Graphic Designer</p>
        </div>
        <p className="font-display text-lg italic text-muted-foreground md:text-center">
          made with too many fonts &amp; questionable amounts of coffee
        </p>
        <p className="text-xs uppercase text-muted-foreground md:text-right">© 2026 Ananya Singh</p>
      </div>
    </footer>
  );
}

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen overflow-clip bg-background text-foreground">
      <SiteHeader />
      <main>{children}</main>
      <SiteFooter />
    </div>
  );
}

export function DogDoodle({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 140 120" fill="none" aria-hidden="true">
      <path d="M38 45C19 34 12 15 23 10c11-5 28 15 31 28m48 7c19-11 26-30 15-35-11-5-28 15-31 28" />
      <path d="M31 59c1-26 18-40 39-40s38 14 39 40c2 30-14 48-39 48S29 89 31 59Z" />
      <path d="M58 66c8-6 16-6 24 0-1 10-5 14-12 14s-11-4-12-14Z" />
      <path d="M70 80v10m-12 0c8 6 16 6 24 0" />
      <circle cx="51" cy="55" r="3" fill="currentColor" />
      <circle cx="89" cy="55" r="3" fill="currentColor" />
      <path d="m16 81 4 9 9 4-9 4-4 9-4-9-9-4 9-4 4-9Zm108-34 2 5 5 2-5 2-2 5-2-5-5-2 5-2 2-5Z" />
    </svg>
  );
}

export function ArrowMark() {
  return <span aria-hidden="true" className="inline-block transition-transform duration-300 group-hover:translate-x-1">↗</span>;
}