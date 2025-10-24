import { useEffect } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Hero from './sections/Hero.tsx'
import Context from './sections/Context.tsx'
import Team from './sections/Team.tsx'
import Closing from './sections/Closing.tsx'
import VideoPage from './pages/VideoPage'
import SongPage from './pages/SongPage'
import ATransparency from './pages/ATransparency'
import LessonsPage from './pages/LessonsPage'
import ChatbotPage from './pages/ChatbotPage'

function App() {
  useEffect(() => {
    // Scroll reveal for sections
    const elements = Array.from(document.querySelectorAll('.reveal'))
    const onIntersect: IntersectionObserverCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view')
          observer.unobserve(entry.target)
        }
      })
    }
    const observer = new IntersectionObserver(onIntersect, { threshold: 0.15 })
    elements.forEach((el) => observer.observe(el))
    // Header shrink on scroll
    const header = document.querySelector('.site-header')
    const onScroll = () => {
      if (!header) return
      if (window.scrollY > 12) header.classList.add('scrolled')
      else header.classList.remove('scrolled')
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    // Mobile menu toggle
    const toggle = document.getElementById('nav-toggle')
    const menu = document.getElementById('nav-menu')
    const toggleMenu = () => menu?.classList.toggle('open')
    toggle?.addEventListener('click', toggleMenu)
    const closeOnClick = (e: Event) => {
      const target = e.target as HTMLElement
      if (target.closest('a')) menu?.classList.remove('open')
    }
    menu?.addEventListener('click', closeOnClick)
    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', onScroll)
      toggle?.removeEventListener('click', toggleMenu)
      menu?.removeEventListener('click', closeOnClick)
    }
  }, [])

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<>
          <Hero />
          <Context />
          <Team />
          <Closing />
        </>} />
        <Route path="/video" element={<VideoPage />} />
        <Route path="/song" element={<SongPage />} />
        <Route path="/ai" element={<ATransparency />} />
        <Route path="/chatbot" element={<ChatbotPage />} />
        <Route path="/lessons" element={<LessonsPage />} />
      </Routes>
    </>
  )
}

export default App
