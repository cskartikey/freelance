import { type NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import kartikeyAvatar from '../../assets/png/kartikey.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelopesBulk } from '@fortawesome/free-solid-svg-icons'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
const Kartikey: NextPage = () => {
  const router = useRouter()
  useEffect(() => {
    if (window.location.pathname.includes('/team')) router.push('/')
  }, [])
  return (
    <>
      <section className="w-screen">
        <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 gap-6 space-x-7">
          <div className="flex max-w-[400px] flex-col gap-16">
            <div className="font-Space-Grotesk text-4xl text-white">
              Hi There!
            </div>
            <p className="font-Poppins text-lg text-white">
              I am{' '}
              <span className="stroke-team text-5xl text-transparent">
                Kartikey
              </span>{' '}
              S. Chauhan. I have experience working as a fullstack developer and
              have had the opportunity to work with a variety of technologies.
              I've worked on Android projects and have also worked with Python.
              Some of my strengths include working with React JS, NodeJS,
              Tailwind CSS, and MongoDB.
            </p>
          </div>
          <div className="flex w-full max-w-[400px] flex-col items-center gap-2">
            <Image
              src={kartikeyAvatar}
              alt={'portrait of Kartikey Chauhan, our Web-Developer'}
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
          href="https://linkedin.com/in/kartikey-chauhan-894a87271"
          rel="noopener noreferrer"
          target="_blank"
        >
          <FontAwesomeIcon
            icon={faLinkedin}
            className="cursor-pointer text-3xl text-footer-number-green opacity-50 hover:text-4xl hover:opacity-100"
          />
        </Link>
        <Link
          href="https://github.com/cskartikey"
          rel="noopener noreferrer"
          target="_blank"
        >
          <FontAwesomeIcon
            icon={faGithub}
            className="cursor-pointer text-3xl text-footer-number-green opacity-50 hover:text-4xl hover:opacity-100"
          />
        </Link>
        <Link
          href="mailto:skartikey314@gmail.com"
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

export default Kartikey
