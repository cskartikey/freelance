import { useState, useEffect } from 'react'
import * as Scroll from 'react-scroll'
import Link from 'next/link'

export default function Nav() {
  const [currScrollEle, setCurrScrollEle] = useState('/')

  useEffect(() => {
    window.addEventListener('scroll', (e) => {
      if (scrollY <= window.innerHeight - 5) setCurrScrollEle('/')
      else if (
        scrollY > window.innerHeight - 5 &&
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
  })

  return (
    <nav
      className={`fixed left-0 top-0 z-50 flex w-full justify-between px-12 pt-6`}
    >
      <div>
        <Link href="/">
          <p className="cursor-pointer font-Mansalva text-3xl text-white">
            <span className={`nav-t font-Space-Grotesk text-nav-blue`}>
              &lt;
            </span>
            Freelance
            <span className={`nav-t font-Space-Grotesk text-nav-blue`}>
              /&gt;
            </span>
          </p>
        </Link>
      </div>
      <div className="z-50 space-x-8 pt-4">
        <Scroll.Link
          to={'hero-section'}
          smooth={'easeOutQuad'}
          ignoreCancelEvents={true}
          className={`font-Space-Grotesk-Bold cursor-pointer text-sm font-bold text-white ${
            currScrollEle === '/'
              ? 'opacity-100'
              : 'opacity-33 hover:opacity-66'
          }`}
        >
          HOME
        </Scroll.Link>
        <Scroll.Link
          to={'about-scroll'}
          smooth={'easeOutQuad'}
          ignoreCancelEvents={true}
          className={`font-Space-Grotesk-Bold cursor-pointer text-sm font-bold text-white ${
            currScrollEle.includes('about')
              ? 'opacity-100'
              : 'opacity-33 hover:opacity-66'
          }`}
        >
          ABOUT
        </Scroll.Link>
        <Scroll.Link
          to={'team-scroll'}
          smooth={'easeOutQuad'}
          ignoreCancelEvents={true}
          className={`font-Space-Grotesk-Bold cursor-pointer text-sm font-bold text-white ${
            currScrollEle.includes('team')
              ? 'opacity-100'
              : 'opacity-33 hover:opacity-66'
          }`}
        >
          TEAM
        </Scroll.Link>
        <Scroll.Link
          to={'contact-scroll'}
          smooth={'easeOutQuad'}
          ignoreCancelEvents={true}
          className={`font-Space-Grotesk-Bold cursor-pointer text-sm font-bold text-white ${
            currScrollEle.includes('contact')
              ? 'opacity-100'
              : 'opacity-33 hover:opacity-66'
          }`}
        >
          CONTACT
        </Scroll.Link>
      </div>
    </nav>
  )
}
