import { type NextPage } from 'next'
import { faFigma, faReact, faNodeJs } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
const AboutUS: NextPage = () => {
  const router = useRouter()

  useEffect(() => {
    if (window.location.pathname.includes('/about')) router.push('/')
  }, [])

  return (
    <>
      <section>
        <div className="relative left-1/2 top-1/2 z-50 flex -translate-x-1/2  flex-col gap-5 sm:gap-10 md:max-w-[700px]">
          <div className="z-50 flex flex-row sm:justify-center gap-3 mt-28 sm:ml-0 ml-4">
            <Link
              href="https://react.dev/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <FontAwesomeIcon
                icon={faReact}
                className="text-5xl text-rectangle-purp"
              />
            </Link>
            <Link
              href="https://nodejs.org/en"
              rel="noopener noreferrer"
              target="_blank"
            >
              <FontAwesomeIcon
                icon={faNodeJs}
                className="text-5xl text-rectangle-purp"
              />
            </Link>
            <Link
              href="https://www.figma.com/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <FontAwesomeIcon
                icon={faFigma}
                className="text-5xl text-rectangle-purp"
              />
            </Link>
          </div>
          <h1 className="text-start sm:text-center font-Poppins text-3xl text-white md:text-4xl sm:mr-16 ml-4 max-w-xl">
            We{' '}
            <span className="sm:craft-anim craft-anim-mobile text-4xl lg:text-5xl text-transparent">
              Craft
            </span>{' '}
            Your Website with Unmatched Dedication, Leveraging the Latest
            Technologies
          </h1>
          <h3 className="text-center font-Space-Grotesk text-xl text-white md:text-2xl">
            We harness the power of cutting-edge technologies like React,
            NextJS, GSAP and Node to build an efficent, scalabe and{' '}
            <span className='underline underline-offset-2'>a high performing website</span>. Our
            meticulous attention to detail extends to the design phase, where we
            craft visually stunning interfaces from scratch using
            industry-leading tools like Figma.
          </h3>
        </div>
      </section>
      <div className="absolute left-1/2 top-1/2 h-[85vh] max-h-[600px] w-[65vw] max-w-[1000px] -translate-x-1/2 -translate-y-1/2 opacity-50 hidden sm:block">
        <div className="rect-abt-l aboslute left-0 top-0 z-0 ml-36 mt-48 h-[300px] w-[520px] rounded-md border-l-2 border-t-2 border-solid border-rectangle-purp"></div>
        <div className="rect-abt-r absolute -bottom-12 right-0 z-0 mb-12 mr-32 h-[400px] w-[700px] rounded-md border-l-2 border-t-2 border-solid border-rectangle-purp"></div>
        {/* Responsive to be made */}
      </div>
    </>
  )
}

export default AboutUS
  