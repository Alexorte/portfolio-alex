import { skills } from '../data/portfolio'
import { SectionTitle } from './SectionTitle'

export function Skills() {
  return (
    <section id="skills" className="bg-slate-50/80 py-20 dark:bg-slate-900/30 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Stack técnico"
          title="Tecnologías que uso para la realización de tareas/proyectos."
          subtitle="Una base orientada a datos, desarrollo web y herramientas de entorno profesional."
          align="center"
        />

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {skills.map((group) => (
            <article key={group.title} className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-card dark:border-white/10 dark:bg-white/5">
              <h3 className="text-lg font-bold text-slate-950 dark:text-white">{group.title}</h3>
              <div className="mt-5 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span key={item} className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-sm font-medium text-slate-700 dark:border-white/10 dark:bg-white/10 dark:text-slate-200">
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
