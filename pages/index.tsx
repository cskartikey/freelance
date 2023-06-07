import Hero from '@/components/Hero'
import AboutScroll from '@/components/AboutScroll'
import TeamScroll from '@/components/TeamScroll'
import ContactScroll from '@/components/ContactScroll'
import Nav from '@/components/Nav'
import Head from 'next/head'
import { useEffect } from 'react'

export default function Index() {
  useEffect(() => {
    window.addEventListener('scroll', (e) => {
      if (scrollY <= window.innerHeight - 5 && location.pathname != '/')
        window.history.pushState('', 'Freelance', '/')
      else if (
        scrollY > window.innerHeight - 5 &&
        scrollY <= window.innerHeight * 3 &&
        location.pathname.includes('/about') == false
      )
        window.history.pushState('', 'Freelance', '/about')
      else if (
        scrollY > window.innerHeight * 3 &&
        scrollY <= window.innerHeight * 7 &&
        location.pathname.includes('/team') == false
      )
        window.history.pushState('', 'Freelance', '/team')
      else if (
        scrollY > window.innerHeight * 7 &&
        scrollY <= window.innerHeight * 9 &&
        location.pathname.includes('contact') == false
      )
        window.history.pushState('', 'Freelance', '/contact')
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
      <Head>
        <title>Freelance</title>
      </Head>
    </>
  )
}
