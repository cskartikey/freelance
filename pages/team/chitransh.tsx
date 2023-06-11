import { type NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import chitranshAvatar from '../../assets/png/chitransh.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faInstagram,
  faGithub,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons'
import { faEnvelopesBulk } from '@fortawesome/free-solid-svg-icons'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
const Chitransh: NextPage = () => {
  const router = useRouter()
  useEffect(() => {
    if (window.location.pathname.includes('/team')) router.push('/')
  }, [])
  return (
    <>
      <section className="w-screen">
        <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 gap-6">
          <div className="flex max-w-[550px] flex-col gap-16">
            <div className="font-Space-Grotesk text-4xl text-white">
              Hi There!
            </div>
            <p className="font-Poppins text-lg text-white">
              I'm{' '}
              <span className="stroke-team text-5xl text-transparent">
                Chitransh
              </span>{' '}
              Verma, a passionate programmer who began this journey at 13. From
              game development in Godot to specializing in web technologies like
              Next.js, Electron.js, Chakra UI, React.js, and Node.js, I've
              continuously honed my skills. With a drive for excellence, I
              thrive on challenges and to strive for excellence in every project
              I undertake.
            </p>
          </div>
          <div className="flex w-full max-w-[400px] flex-col items-center gap-2">
            <Image
              src={chitranshAvatar}
              alt={'portrait of Chitransh Verma, our second Web-Developer'}
              className="pointer-events-none h-auto w-full max-w-[250px] rounded-md"
            />
            <h3 className="font-Space-Grotesk text-2xl font-bold text-white opacity-[0.5]">
              Web-Developer
            </h3>
          </div>
        </div>
      </section>
      <div className="absolute bottom-[22vh] left-[5%] flex flex-col gap-4">
        <Link
          href="https://www.linkedin.com/in/thearcane"
          rel="noopener noreferrer"
          target="_blank"
        >
          <FontAwesomeIcon
            icon={faLinkedin}
            className="cursor-pointer text-3xl text-footer-number-green opacity-50 hover:text-4xl hover:opacity-100"
          />
        </Link>
        <Link
          href="https://github.com/AnonymousXC"
          rel="noopener noreferrer"
          target="_blank"
        >
          <FontAwesomeIcon
            icon={faGithub}
            className="cursor-pointer text-3xl text-footer-number-green opacity-50 hover:text-4xl hover:opacity-100"
          />
        </Link>
        <Link
          href="mailto:vermachitransh12@gmail.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          <FontAwesomeIcon
            icon={faEnvelopesBulk}
            className="cursor-pointer text-3xl text-footer-number-green opacity-50 hover:text-4xl hover:opacity-100"
          />
        </Link>
      </div>
    </>
  )
}

export default Chitransh
