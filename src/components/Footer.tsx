import { profile } from '../data/portfolio'

export function Footer() {
  return (
    <footer className="border-t border-slate-200 py-8 dark:border-white/10">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 text-sm text-slate-500 dark:text-slate-400 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <p>© {new Date().getFullYear()} {profile.name}. Portfolio creado con React, TypeScript y Tailwind CSS.</p>
        <a href="#top" className="font-semibold text-slate-700 transition hover:text-brand-600 dark:text-slate-200 dark:hover:text-brand-300">
          Volver arriba ↑
        </a>
      </div>
    </footer>
  )
}
