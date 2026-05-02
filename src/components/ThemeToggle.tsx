type ThemeToggleProps = {
  isDark: boolean
  onToggle: () => void
}

export function ThemeToggle({ isDark, onToggle }: ThemeToggleProps) {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label="Cambiar tema"
      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200/70 bg-white/80 text-lg shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:shadow-card dark:border-white/10 dark:bg-white/10 dark:text-white"
    >
      <span aria-hidden>{isDark ? '☀️' : '🌙'}</span>
    </button>
  )
}
