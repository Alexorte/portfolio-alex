type SectionTitleProps = {
  eyebrow: string
  title: string
  subtitle?: string
  align?: 'left' | 'center'
}

export function SectionTitle({ eyebrow, title, subtitle, align = 'left' }: SectionTitleProps) {
  return (
    <div className={align === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}>
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-brand-600 dark:text-brand-300">{eyebrow}</p>
      <h2 className="text-3xl font-bold tracking-tight text-slate-950 dark:text-white sm:text-4xl">{title}</h2>
      {subtitle ? <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">{subtitle}</p> : null}
    </div>
  )
}
