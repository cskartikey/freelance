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
        <div className="flex flex-col gap-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 md:max-w-[700px] z-50">
          <div className="flex flex-row gap-3 justify-center z-50">
            <Link
              href="https://react.dev/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <FontAwesomeIcon
                icon={faReact}
                className="text-rectangle-purp text-5xl"
              />
            </Link>
            <Link
              href="https://nodejs.org/en"
              rel="noopener noreferrer"
              target="_blank"
            >
              <FontAwesomeIcon
                icon={faNodeJs}
                className="text-rectangle-purp text-5xl"
              />
            </Link>
            <Link
              href="https://www.figma.com/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <FontAwesomeIcon
                icon={faFigma}
                className="text-rectangle-purp text-5xl"
              />
            </Link>
          </div>
          <h1 className="font-Poppins text-white text-3xl text-center md:text-4xl">
            We{' '}
            <span className="craft-anim text-transparent text-5xl underline underline-offset-2">
              Craft
            </span>{' '}
            Your Website with Unmatched Dedication, Leveraging the Latest
            Technologies
          </h1>
          <h3 className="font-Space-Grotesk text-white text-xl text-center md:text-2xl">
            We harness the power of cutting-edge technologies like React,
            NextJS, GSAP and Node to build an efficent, scalabe and{' '}
            <span className="underline">a high performing website</span>. Our
            meticulous attention to detail extends to the design phase, where we
            craft visually stunning interfaces from scratch using
            industry-leading tools like Figma.
          </h3>
        </div>
      </section>
      <div className="absolute w-[65vw] h-[85vh] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-[1000px] max-h-[600px] opacity-50">
        <div className="rect-abt-l w-[520px] h-[300px] border-solid border-rectangle-purp border-2 rounded-md aboslute top-0 mt-10 left-0 z-0"></div>
        <div className="rect-abt-r w-[700px] h-[400px] border-solid border-rectangle-purp border-2 rounded-md absolute -bottom-12 right-0 z-0 mb-6"></div>
        {/* Responsive to be made */}
      </div>
    </>
  )
}

export default AboutUS
