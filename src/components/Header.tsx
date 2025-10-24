import { useEffect } from 'react'

export default function Header() {
  useEffect(() => {
    const header = document.querySelector('.site-header')
    const onScroll = () => {
      if (!header) return
      if (window.scrollY > 12) header.classList.add('scrolled')
      else header.classList.remove('scrolled')
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
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
      window.removeEventListener('scroll', onScroll)
      toggle?.removeEventListener('click', toggleMenu)
      menu?.removeEventListener('click', closeOnClick)
    }
  }, [])

  return (
    <header className="site-header">
      <div className="header-inner">
        <a className="brand" href="#top" aria-label="Trang chủ">
          <span className="brand-mark" aria-hidden>★</span>
          <span className="brand-text">Nhóm 18</span>
        </a>
        <button id="nav-toggle" className="nav-toggle" aria-label="Mở menu">☰</button>
        <nav id="nav-menu" className="nav-menu" aria-label="Điều hướng chính">
          <a href="/">Trang chủ</a>
          <a href="/ai">Minh bạch AI</a>
          <a href="/chatbot">Chatbot</a>
          <a href="/video">Video</a>
          <a href="/lessons">Bài học</a>
          <a href="/song">Bài hát</a>
          <a href="https://padlet.com/bichphuongbui2015/vnr-q-a-ipjjn48xo6mbigc5" target="_blank" rel="noreferrer">Q&A</a>
        </nav>
      </div>
    </header>
  )
}

