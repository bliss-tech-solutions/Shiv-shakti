import { useState, useEffect } from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import WhyChooseUs from './components/WhyChooseUs'
import Clients from './components/Clients'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Loader from './components/Loader'
import './App.css'

function App() {
  const [loading, setLoading] = useState(true)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
      // Small delay to ensure loader has faded before showing content
      setTimeout(() => setVisible(true), 50)
    }, 2500)

    // Scroll reveal observer
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active')
        }
      })
    }, observerOptions)

    const revealElements = document.querySelectorAll('.reveal')
    revealElements.forEach(el => observer.observe(el))

    return () => {
      clearTimeout(timer)
      revealElements.forEach(el => observer.unobserve(el))
    }
  }, [visible])

  return (
    <>
      {loading && <Loader />}
      <div
        style={{
          opacity: visible ? 1 : 0,
          transition: 'opacity 0.5s ease',
          visibility: visible ? 'visible' : 'hidden'
        }}
      >
        <Navbar />
        <Hero />
        <About />
        <Services />
        <WhyChooseUs />
        <Clients />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </>
  )
}

export default App
