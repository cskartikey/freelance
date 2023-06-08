import { type NextPage } from 'next'
import Head from 'next/head'
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

const Chitransh: NextPage = () => {
  return (
    <>
      <Head>
        <title>Team</title>
      </Head>
      <section className="w-screen">
        <div className="flex gap-6 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="flex flex-col gap-16 max-w-[550px]">
            <div className="font-Space-Grotesk text-4xl text-white">
              Hi There!
            </div>
            <p className="text-white text-lg font-Poppins">
              I'm{' '}
              <span className="stroke-team text-transparent text-5xl">
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
          <div className="flex flex-col max-w-[400px] w-full items-center gap-2">
            <Image
              src={chitranshAvatar}
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
          href="https://www.linkedin.com/in/thearcane"
          rel="noopener noreferrer"
          target="_blank"
        >
          <FontAwesomeIcon
            icon={faLinkedin}
            className="text-footer-number-green text-3xl opacity-50 cursor-pointer hover:opacity-100 hover:text-4xl"
          />
        </Link>
        <Link
          href="https://github.com/AnonymousXC"
          rel="noopener noreferrer"
          target="_blank"
        >
          <FontAwesomeIcon
            icon={faGithub}
            className="text-footer-number-green text-3xl opacity-50 cursor-pointer hover:opacity-100 hover:text-4xl"
          />
        </Link>
        <Link
          href="mailto:vermachitransh12@gmail.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          <FontAwesomeIcon
            icon={faEnvelopesBulk}
            className="text-footer-number-green text-3xl opacity-50 cursor-pointer hover:opacity-100 hover:text-4xl"
          />
        </Link>
      </div>
    </>
  )
}

export default Chitransh
