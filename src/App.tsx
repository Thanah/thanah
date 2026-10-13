import { About } from './components/About'
import { Contact } from './components/Contact'
import { Experience } from './components/Experience'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Projects } from './components/Projects'
import { useScrollReveal } from './hooks/motion'

export default function App() {
  useScrollReveal()
  return (
    <>
      <Header />
      <main id="main">
        <Hero />
        <About />
        <Experience />
        <Projects />
      </main>
      <Contact />
    </>
  )
}
