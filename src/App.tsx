import { useEffect } from 'react'
import { Contact } from './components/Contact'
import { Experience } from './components/Experience'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Projects } from './components/Projects'
import { Skills } from './components/Skills'

export default function App() {
  useEffect(() => {
    document.documentElement.classList.add('dark')
    window.localStorage.setItem('theme', 'dark')
  }, [])

  return (
    <div className="min-h-screen bg-white text-slate-950 selection:bg-brand-200 selection:text-slate-950 dark:bg-slate-950 dark:text-white">
      <Header />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
