import AppLayout from './components/Layout/AppLayout'
import Hero from './components/Hero/Hero'
import ValueProposition from './components/Sections/ValueProposition'
import Skills from './components/Sections/Skills'
import Contact from './components/Sections/Contact'
import LoadingScreen from './components/LoadingScreen/LoadingScreen'
import { useEffect, useState } from 'react'

function App() {
  const [init, setInit] = useState(false)
  const [exiting, setExiting] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setExiting(true)
    }, 5000)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (exiting) {
      const timer = setTimeout(() => {
        setInit(true)
        setTimeout(() => setMounted(true), 50)
      }, 600)

      return () => clearTimeout(timer)
    }
  }, [exiting])

  const handleSkip = () => {
    setExiting(true)
  }

  return (
    <AppLayout>
      {!init ? (
        <LoadingScreen
          onClick={handleSkip}
          isExiting={exiting}
        />
      ) : (
        <div
          className={`transition-all duration-700 ${
            mounted
              ? 'opacity-100 translate-y-0 blur-0'
              : 'opacity-0 translate-y-8 blur-sm'
          }`}
        >
          <div className="relative">
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#00ADD8] to-transparent opacity-30"></div>
          </div>
          <Hero />
          <ValueProposition />
          <Skills />
          <hr className="border-0 h-px bg-gradient-to-r from-transparent via-[#00ADD8]/30 to-transparent w-full my-0" />
          <Contact />
        </div>
      )}
    </AppLayout>
  )
}

export default App