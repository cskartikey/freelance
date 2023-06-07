import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Nav() {
  const router = useRouter()
  const [navColor, setNavColor] = useState('text-nav-blue')
  const [currScrollEle, setCurrScrollEle] = useState('/')

  useEffect(() => {
    window.addEventListener('scroll', (e) => {
      if (scrollY <= window.innerHeight) setCurrScrollEle('/')
      else if (
        scrollY > window.innerHeight &&
        scrollY <= window.innerHeight * 3
      )
        setCurrScrollEle('about')
      else if (
        scrollY > window.innerHeight * 3 &&
        scrollY <= window.innerHeight * 7
      )
        setCurrScrollEle('team')
      else if (
        scrollY > window.innerHeight * 7 &&
        scrollY <= window.innerHeight * 9
      )
        setCurrScrollEle('contact')
    })
    if (router.pathname === '/') {
      setNavColor('text-nav-blue')
    } else if (router.pathname.includes('/about')) {
      setNavColor('text-rectangle-purp')
    } else if (router.pathname.includes('/team')) {
      setNavColor('text-team-green')
    } else if (router.pathname.includes('/contact')) {
      setNavColor('text-contact-red')
    }
  }, [router.pathname])

  return (
    <nav
      className={`flex justify-between pt-6 px-12 fixed top-0 left-0 z-50 w-full`}
    >
      <div>
        <p className="font-Mansalva text-white text-3xl cursor-pointer">
          <span className={`nav-t font-Space-Grotesk ${navColor}`}>&lt;</span>
          Freelance
          <span className={`nav-t font-Space-Grotesk ${navColor}`}>/&gt;</span>
        </p>
      </div>
      <div className="space-x-8 pt-4 z-50">
        <Link
          href="/"
          className={`font-Space-Grotesk-Bold text-white font-bold text-sm ${
            currScrollEle === '/'
              ? 'opacity-100'
              : 'opacity-33 hover:opacity-66'
          }`}
        >
          HOME
        </Link>
        <Link
          href="#about-scroll"
          className={`font-Space-Grotesk-Bold text-white font-bold text-sm ${
            currScrollEle.includes('about')
              ? 'opacity-100'
              : 'opacity-33 hover:opacity-66'
          }`}
        >
          ABOUT
        </Link>
        <Link
          href="#team-scroll"
          className={`font-Space-Grotesk-Bold text-white font-bold text-sm ${
            currScrollEle.includes('team')
              ? 'opacity-100'
              : 'opacity-33 hover:opacity-66'
          }`}
        >
          TEAM
        </Link>
        <Link
          href="#contact-scroll"
          className={`font-Space-Grotesk-Bold text-white font-bold text-sm ${
            currScrollEle.includes('contact')
              ? 'opacity-100'
              : 'opacity-33 hover:opacity-66'
          }`}
        >
          CONTACT
        </Link>
      </div>
    </nav>
  )
