import { projects } from '../data/portfolio'
import { SectionTitle } from './SectionTitle'

export function Projects() {
  return (
    <section id="projects" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Proyectos destacados"
          title="Proyectos aplicados de Machine Learning, datos y visión artificial."
          subtitle="He priorizado proyectos que conectan con roles de datos, ML y software. Algunos incluyen demo en vídeo y otros se pueden revisar directamente en GitHub."
          align="center"
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.title}
              className={`group relative overflow-hidden rounded-[2rem] border p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-glow dark:border-white/10 sm:p-8 ${
                project.featured
                  ? 'border-brand-200 bg-gradient-to-br from-brand-50 via-white to-cyan-50 dark:from-brand-500/10 dark:via-white/5 dark:to-cyan-400/10'
                  : 'border-slate-200 bg-white dark:bg-white/5'
              }`}
            >
              <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-brand-400/10 blur-2xl transition group-hover:bg-brand-400/20" />
              <div className="relative flex flex-wrap items-center justify-between gap-3">
                <span className="rounded-full bg-slate-950 px-3 py-1 text-xs font-bold uppercase tracking-[0.25em] text-white dark:bg-white dark:text-slate-950">
                  {project.type}
                </span>
                {project.repo ? (
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm font-semibold text-brand-700 transition hover:text-brand-500 dark:text-brand-300"
                  >
                    Repositorio ↗
                  </a>
                ) : project.demo ? (
                  <span className="text-sm font-semibold text-brand-700 dark:text-brand-300">Demo en vídeo</span>
                ) : null}
              </div>

              <h3 className="relative mt-6 text-2xl font-black tracking-tight text-slate-950 dark:text-white">{project.title}</h3>
              <p className="relative mt-4 text-slate-600 dark:text-slate-300">{project.description}</p>

              {project.demo ? (
                <div className="relative mt-6 overflow-hidden rounded-3xl border border-slate-200 bg-slate-950 shadow-card dark:border-white/10">
                  <video className="aspect-video w-full bg-slate-950 object-cover" controls muted preload="metadata" playsInline>
                    <source src={project.demo} type="video/mp4" />
                    Tu navegador no puede reproducir este vídeo.
                  </video>
                </div>
              ) : null}

              <ul className="relative mt-6 space-y-3 text-sm text-slate-600 dark:text-slate-300">
                {project.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              <div className="relative mt-7 flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <span key={item} className="rounded-full border border-slate-200 bg-white/80 px-3 py-1.5 text-xs font-semibold text-slate-700 dark:border-white/10 dark:bg-white/10 dark:text-slate-200">
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
