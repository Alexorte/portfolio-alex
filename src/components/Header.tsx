import { useState } from 'react'
import { navLinks, profile } from '../data/portfolio'

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200/60 bg-white/80 backdrop-blur-xl dark:border-white/10 dark:bg-slate-950/70">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8" aria-label="Navegación principal">
        <a href="#top" className="group flex items-center gap-3 font-semibold text-slate-950 dark:text-white">
          <span className="grid h-10 w-10 place-items-center rounded-2xl bg-slate-950 text-sm font-bold text-white shadow-card transition group-hover:-rotate-6 dark:bg-white dark:text-slate-950">
            AO
          </span>
          <span className="hidden sm:inline">{profile.name}</span>
        </a>

        <div className="hidden items-center gap-1 rounded-full border border-slate-200/70 bg-white/70 p-1 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/5 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-slate-950 dark:text-slate-300 dark:hover:bg-white/10 dark:hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200/70 bg-white/80 text-slate-950 shadow-sm transition hover:bg-slate-100 dark:border-white/10 dark:bg-white/10 dark:text-white lg:hidden"
          aria-label="Abrir menú"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((value) => !value)}
        >
          <span className="text-xl" aria-hidden>{isOpen ? '×' : '☰'}</span>
        </button>
      </nav>

      {isOpen ? (
        <div className="border-t border-slate-200/70 bg-white/95 px-4 py-4 shadow-card dark:border-white/10 dark:bg-slate-950/95 lg:hidden">
          <div className="mx-auto grid max-w-6xl gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="rounded-2xl px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-white/10"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  )
}
