import { languages, profile, softSkills } from '../data/portfolio'
import { SectionTitle } from './SectionTitle'

export function About() {
  return (
    <section id="about" className="py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <SectionTitle
          eyebrow="Sobre mí"
          title="Un perfil técnico con foco en datos, software y aprendizaje continuo."
          subtitle="Mi objetivo es crecer en proyectos donde pueda unir análisis, modelos de ML y desarrollo de aplicaciones útiles."
        />

        <div className="rounded-[2rem] border border-slate-200 bg-white/80 p-6 shadow-card backdrop-blur dark:border-white/10 dark:bg-white/5 sm:p-8">
          <p className="text-lg leading-8 text-slate-700 dark:text-slate-300">{profile.summary}</p>
          <p className="mt-5 text-lg leading-8 text-slate-700 dark:text-slate-300">
            Además de la parte de datos, tengo experiencia en desarrollo full-stack con React/TypeScript y Django REST Framework, despliegue con Docker y familiarización con reporting en Power BI.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-3xl bg-slate-50 p-5 dark:bg-white/5">
              <h3 className="font-bold text-slate-950 dark:text-white">Idiomas</h3>
              <div className="mt-4 space-y-3">
                {languages.map((language) => (
                  <div key={language.name} className="flex items-center justify-between gap-4 text-sm">
                    <span className="font-medium text-slate-700 dark:text-slate-200">{language.name}</span>
                    <span className="rounded-full bg-white px-3 py-1 text-slate-500 shadow-sm dark:bg-white/10 dark:text-slate-300">{language.level}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl bg-slate-50 p-5 dark:bg-white/5">
              <h3 className="font-bold text-slate-950 dark:text-white">Habilidades</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {softSkills.map((skill) => (
                  <span key={skill} className="rounded-full bg-white px-3 py-1 text-sm text-slate-600 shadow-sm dark:bg-white/10 dark:text-slate-300">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
