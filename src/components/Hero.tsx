import profileImage from '../assets/alex-ortega-redondo.jpg'
import { profile } from '../data/portfolio'

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pb-16 pt-32 sm:pb-24 sm:pt-40">
      <div className="absolute inset-0 -z-10 bg-grid bg-[size:38px_38px] opacity-60 dark:opacity-25" />
      <div className="absolute left-1/2 top-20 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-brand-400/30 blur-3xl dark:bg-cyan-400/20" />
      <div className="absolute right-0 top-1/3 -z-10 h-96 w-96 rounded-full bg-cyan-300/25 blur-3xl dark:bg-brand-700/20" />

      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1.08fr_0.92fr] lg:px-8">
        <div className="animate-reveal">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white/75 px-4 py-2 text-sm font-semibold text-brand-700 shadow-sm backdrop-blur dark:border-brand-400/20 dark:bg-white/10 dark:text-brand-200">
            <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_0_6px_rgba(52,211,153,0.18)]" />
            Interesado en Data Science, Data Engineering y proyectos de I+D
          </div>

          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-brand-600 dark:text-brand-300">{profile.role}</p>
          <h1 className="max-w-4xl text-5xl font-black tracking-tight text-slate-950 dark:text-white sm:text-6xl lg:text-7xl">
            Hola, soy <span className="bg-gradient-to-r from-brand-600 to-cyan-500 bg-clip-text text-transparent">Alex Ortega</span>.
          </h1>
          <p className="mt-6 max-w-2xl text-xl leading-8 text-slate-600 dark:text-slate-300">{profile.summary}</p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#projects"
              className="inline-flex items-center justify-center rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white shadow-card transition hover:-translate-y-0.5 hover:bg-slate-800 dark:bg-white dark:text-slate-950 dark:hover:bg-slate-200"
            >
              Ver proyectos
            </a>
            <a
              href={profile.cv}
              download
              className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white/80 px-6 py-3 text-sm font-semibold text-slate-950 shadow-sm transition hover:-translate-y-0.5 hover:shadow-card dark:border-white/10 dark:bg-white/10 dark:text-white"
            >
              Descargar CV
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-3 text-sm font-medium text-slate-600 dark:text-slate-300">
            <a className="rounded-full border border-slate-200 bg-white/70 px-4 py-2 transition hover:-translate-y-0.5 hover:text-slate-950 dark:border-white/10 dark:bg-white/5 dark:hover:text-white" href={profile.linkedin} target="_blank" rel="noreferrer">
              LinkedIn ↗
            </a>
            <a className="rounded-full border border-slate-200 bg-white/70 px-4 py-2 transition hover:-translate-y-0.5 hover:text-slate-950 dark:border-white/10 dark:bg-white/5 dark:hover:text-white" href={profile.github} target="_blank" rel="noreferrer">
              GitHub ↗
            </a>
            <a className="rounded-full border border-slate-200 bg-white/70 px-4 py-2 transition hover:-translate-y-0.5 hover:text-slate-950 dark:border-white/10 dark:bg-white/5 dark:hover:text-white" href={`mailto:${profile.email}`}>
              Email
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md animate-float lg:mx-0">
          <div className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-gradient-to-br from-brand-500/20 via-cyan-400/10 to-transparent blur-2xl" />
          <div className="overflow-hidden rounded-[2.25rem] border border-white/30 bg-white/70 p-3 shadow-glow backdrop-blur dark:border-white/10 dark:bg-white/10">
            <img
              src={profileImage}
              alt="Alex Ortega Redondo presentando un proyecto"
              className="aspect-[4/5] w-full rounded-[1.75rem] object-cover object-center"
            />
          </div>
          <div className="absolute -bottom-6 left-6 right-6 rounded-3xl border border-slate-200 bg-white/90 p-4 shadow-card backdrop-blur dark:border-white/10 dark:bg-slate-900/90">
            <p className="text-sm font-semibold text-slate-950 dark:text-white">{profile.headline}</p>
            <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">{profile.location}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
