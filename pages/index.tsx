import Hero from '@/components/Hero'
import AboutScroll from '@/components/AboutScroll'
import TeamScroll from '@/components/TeamScroll'
import ContactScroll from '@/components/ContactScroll'
import Nav from '@/components/Nav'
import { useEffect } from 'react'

export default function Index() {
  useEffect(() => {
    window.addEventListener('scroll', (e) => {
      if (scrollY <= window.innerHeight - 5 && location.pathname != '/') {
        window.history.pushState('', 'Freelance', '/')
        document.title = 'Kode Crumbs: Freelance'
      } else if (
        scrollY > window.innerHeight - 5 &&
        scrollY <= window.innerHeight * 3 &&
        location.pathname.includes('/about') == false
      ) {
        window.history.pushState('', 'Freelance', '/about')
        document.title = 'Freelance: About'
      } else if (
        scrollY > window.innerHeight * 3 &&
        scrollY <= window.innerHeight * 7 &&
        location.pathname.includes('/team') == false
      ) {
        window.history.pushState('', 'Freelance', '/team')
        document.title = 'Freelance: Team'
      } else if (
        scrollY > window.innerHeight * 7 &&
        scrollY <= window.innerHeight * 9 &&
        location.pathname.includes('contact') == false
      ) {
        window.history.pushState('', 'Freelance', '/contact')
        document.title = 'Freelance: Contact'
      }
    })
    window.addEventListener('popstate', (e) => {
      e.preventDefault()
      history.go(history.length - 1)
    })
  }, [])

  return (
    <>
      <Nav />
      <Hero />
      <AboutScroll />
      <TeamScroll />
      <ContactScroll />
    </>
  )
}
