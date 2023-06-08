import { type NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import kartikeyAvatar from '../../assets/png/kartikey.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faInstagram,
  faGithub,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons'
import { faEnvelopesBulk } from '@fortawesome/free-solid-svg-icons'

const Kartikey: NextPage = () => {
  return (
    <>
      <Head>
        <title>Team</title>
      </Head>
      <section className="w-screen">
        <div className="flex gap-6 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 space-x-7">
          <div className="flex flex-col gap-16 max-w-[400px]">
            <div className="font-Space-Grotesk text-4xl text-white">
              Hi There!
            </div>
            <p className="text-white text-lg font-Poppins">
              I am <span className="stroke-team text-transparent text-5xl">Kartikey</span> S. Chauhan. I have experience working as a fullstack
              developer and have had the opportunity to work with a variety of
              technologies. I've worked on Android projects and have also worked
              with Python. Some of my strengths include working with React JS,
              NodeJS, Tailwind CSS, and MongoDB.
            </p>
          </div>
          <div className="flex flex-col max-w-[400px] w-full items-center gap-2">
            <Image
              src={kartikeyAvatar}
              alt={'people'}
              className="w-full h-auto max-w-[250px] rounded-md pointer-events-none"
            />
            <h3 className="text-white opacity-[0.5] text-2xl font-Space-Grotesk font-bold">
              Web-Developer
            </h3>
          </div>
        </div>
      </section>
      <div className="absolute flex flex-col gap-4 left-[5%] bottom-[22vh]">
        <Link
          href="https://linkedin.com/in/kartikey-chauhan-894a87271"
          rel="noopener noreferrer"
          target="_blank"
        >
          <FontAwesomeIcon
            icon={faLinkedin}
            className="text-[#A0D8B3] text-3xl opacity-[0.5] cursor-pointer"
          />
        </Link>
        <Link
          href="https://github.com/cskartikey"
          rel="noopener noreferrer"
          target="_blank"
        >
          <FontAwesomeIcon
            icon={faGithub}
            className="text-[#A0D8B3] text-3xl opacity-[0.5] cursor-pointer"
          />
        </Link>
        <Link
          href="mailto:skartikey314@gmail.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          <FontAwesomeIcon
            icon={faEnvelopesBulk}
            className="text-[#A0D8B3] text-3xl opacity-[0.5] cursor-pointer"
          />
        </Link>
      </div>
    </>
  )
}

export default Kartikey
