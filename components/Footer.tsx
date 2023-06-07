import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { idText } from 'typescript'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faChevronLeft,
  faChevronRight,
  faComputerMouse,
} from '@fortawesome/free-solid-svg-icons'

export default function Footer() {
  const router = useRouter()
  // const [footer, setFotColor] = useState('border-nav-blue')
  // const [footerNumber, setnFotColor] = useState('bg-scroll-blue')
  return (
    <footer className="fixed bottom-16 w-full flex justify-start pl-8 z-50">
      <div className="pt-2">
        <Link
          href="https://freelance.kodec.tech/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <p className="text-white opacity-[.35] font-Space-Mono">
            freelance.kodec.tech
          </p>
        </Link>
      </div>
      <div
        className={`footer grid grid-cols-4 divide-x-2 divide-opacity-50 divide-nav-blue border-solid border-2 border-nav-blue ml-36 border-opacity-50 font-Space-Mono`}
      >
        <div
          className={`bg-scroll-blue text-black opacity-90 px-2 text-lg`}
          id="footer-number-1"
        >
          1
        </div>
        <div
          className={`footer-number-2 text-black opacity-90 px-2 text-lg text-transparent`}
          id="footer-number-2"
        >
          2
        </div>
        <div
          className={`footer-number-3 text-black opacity-90 px-2 text-lg text-transparent `}
          id="footer-number-3"
        >
          3
        </div>
        <div
          className={`footer-number-4 text-black opacity-90 px-2 text-lg text-transparent`}
          id="footer-number-4"
        >
          4
        </div>
      </div>
      <div>
        <FontAwesomeIcon
          icon={faComputerMouse}
          className="text-scroll-blue text-3xl ml-12"
          id="mouse"
        />
      </div>
      <div className="border-0 border-t-4 h-1 w-1/2 border-dotted mt-2 ml-4 border-scroll-blue"></div>
      <div>
        <FontAwesomeIcon
          icon={faChevronRight}
          className="text-scroll-blue mb-0.5"
        />
      </div>
    </footer>
  )
}
