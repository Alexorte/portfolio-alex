import { education, experience } from '../data/portfolio'
import { SectionTitle } from './SectionTitle'

export function Experience() {
  return (
    <section id="experience" className="bg-slate-50/80 py-20 dark:bg-slate-900/30 sm:py-28">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
        <SectionTitle
          eyebrow="Experiencia y formación"
          title="Base académica y experiencia real."
          subtitle="Combinación de Ingeniería Informática, proyectos propios y experiencia en entornos profesionales y universitarios."
        />

        <div className="space-y-6">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-white/5 sm:p-8">
            <h3 className="text-xl font-bold text-slate-950 dark:text-white">Experiencia</h3>
            <div className="mt-6 space-y-6">
              {experience.map((item) => (
                <article key={item.title} className="relative border-l border-brand-200 pl-6 dark:border-brand-400/30">
                  <span className="absolute -left-2 top-1 h-4 w-4 rounded-full border-4 border-white bg-brand-500 dark:border-slate-900" />
                  <p className="text-sm font-semibold text-brand-700 dark:text-brand-300">{item.date}</p>
                  <h4 className="mt-2 text-lg font-bold text-slate-950 dark:text-white">{item.title}</h4>
                  <p className="mt-1 text-sm font-semibold text-slate-500 dark:text-slate-400">{item.company}</p>
                  <p className="mt-4 text-slate-600 dark:text-slate-300">{item.description}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span key={tag} className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700 dark:bg-white/10 dark:text-slate-200">
                        {tag}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-white/5 sm:p-8">
            <h3 className="text-xl font-bold text-slate-950 dark:text-white">Formación y certificaciones</h3>
            <div className="mt-6 grid gap-4">
              {education.map((item) => (
                <article key={item.title} className="rounded-3xl bg-slate-50 p-5 dark:bg-white/5">
                  <p className="text-sm font-semibold text-brand-700 dark:text-brand-300">{item.date}</p>
                  <h4 className="mt-2 font-bold text-slate-950 dark:text-white">{item.title}</h4>
                  <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{item.place}</p>
                  {item.description ? <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">{item.description}</p> : null}
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
