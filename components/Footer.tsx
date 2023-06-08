import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faChevronRight,
  faComputerMouse,
} from '@fortawesome/free-solid-svg-icons'

function Footer() {
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
        className={`footer grid grid-cols-4 divide-x-2 divide-opacity-50 divide-nav-blue border-solid border-2 border-nav-blue ml-36 border-opacity-50 font-Space-Mono z-50`}
      >
        <div
          className={`footer-text bg-scroll-blue text-black opacity-90 px-2 text-lg`}
        >
          1
        </div>
        <div className={`text-black opacity-90 px-2 text-lg text-transparent`}>
          .
        </div>
        <div className={`text-black opacity-90 px-2 text-lg text-transparent `}>
          .
        </div>
        <div className={`text-black opacity-90 px-2 text-lg text-transparent`}>
          .
        </div>
      </div>
      <div>
        <FontAwesomeIcon
          icon={faComputerMouse}
          className="mouse text-scroll-blue text-3xl ml-12"
        />
      </div>
      <div className="relative">
        <div className="dotted-line border-0 border-t-4 h-1 w-[50vw] border-dotted mt-2 ml-4 border-scroll-blue"></div>
        <div className="absolute bottom-1 right-96 flex items-center justify-center w-full h-full">
          <div className="scroll-text text-black bg-scroll-blue rounded-md font-Space-Grotesk h-6 w-16 text-center z-50">
            Scroll.
          </div>
        </div>
      </div>

      <div>
        <FontAwesomeIcon
          icon={faChevronRight}
          className="right-arrow text-scroll-blue mb-0.5"
        />
      </div>
    </footer>
  )
}

export default Footer
