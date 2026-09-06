import { profile } from '../data/portfolio'

export function Contact() {
  return (
    <section id="contact" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-slate-950 p-8 text-white shadow-glow dark:bg-white dark:text-slate-950 sm:p-12">
          <div className="absolute -right-20 -top-24 h-72 w-72 rounded-full bg-brand-400/30 blur-3xl" />
          <div className="absolute -bottom-24 left-1/3 h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl" />

          <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-brand-300 dark:text-brand-700">Contacto</p>
              <h2 className="text-3xl font-black tracking-tight sm:text-5xl">¿Hablamos?</h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300 dark:text-slate-600">
                Estoy abierto a oportunidades profesionales en Data Science, Data Engineering y proyectos de I+D relacionados con datos e inteligencia artificial.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:bg-slate-100 dark:bg-slate-950 dark:text-white dark:hover:bg-slate-800"
              >
                Enviar email
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-semibold transition hover:-translate-y-0.5 hover:bg-white/10 dark:border-slate-200 dark:hover:bg-slate-100"
              >
                LinkedIn ↗
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-semibold transition hover:-translate-y-0.5 hover:bg-white/10 dark:border-slate-200 dark:hover:bg-slate-100"
              >
                GitHub ↗
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
