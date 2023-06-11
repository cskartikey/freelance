import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faChevronRight,
  faComputerMouse,
} from '@fortawesome/free-solid-svg-icons'

function Footer() {
  return (
    <footer className="fixed bottom-16 z-50 flex w-full justify-start pl-8">
      <div className="pt-2">
        <Link
          href="https://freelance.kodec.tech/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <p className="font-Space-Mono text-sm text-white opacity-[.35] sm:text-base">
            freelance.kodec.tech
          </p>
        </Link>
      </div>
      <div
        className={`footer z-50 ml-36 hidden grid-cols-4 divide-x-2 divide-nav-blue divide-opacity-50 border-2 border-solid border-nav-blue border-opacity-50 font-Space-Mono sm:grid`}
        id="divider"
      >
        <div
          className={`footer-text bg-scroll-blue px-2 text-lg text-black opacity-90`}
        >
          1
        </div>
        <div className={`px-2 text-lg text-black text-transparent opacity-90`}>
          .
        </div>
        <div className={`px-2 text-lg text-black text-transparent opacity-90 `}>
          .
        </div>
        <div className={`px-2 text-lg text-black text-transparent opacity-90`}>
          .
        </div>
      </div>
      <div>
        <FontAwesomeIcon
          icon={faComputerMouse}
          className="mouse ml-12 hidden text-3xl text-scroll-blue sm:block"
        />
      </div>
      <div className="relative hidden sm:block">
        <div className="dotted-line ml-4 mt-2 h-1 w-[50vw] border-0 border-t-4 border-dotted border-scroll-blue"></div>
        <div className="absolute bottom-1 right-[21vw] flex h-full w-full items-center justify-center">
          <div className="scroll-text z-50 h-6 w-16 rounded-md bg-scroll-blue text-center font-Space-Grotesk text-black">
            Scroll.
          </div>
        </div>
      </div>

      <div>
        <FontAwesomeIcon
          icon={faChevronRight}
          className="right-arrow mb-0.5 hidden text-scroll-blue sm:block"
        />
      </div>
    </footer>
  )
}

export default Footer
