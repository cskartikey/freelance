import { type NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import dummyAvatar from '../../assets/png/avatar.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelopesBulk } from '@fortawesome/free-solid-svg-icons'

const Utkarsh: NextPage = () => {
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
              I am Kunwar <span className="stroke-team text-transparent text-5xl">Utkarsh</span>. I have around 4 years of experience in
              Graphics Designing. Being fascinated by web development, the
              creative side of mine paid off to make me a skilled Designer. I am
              proficient in GIMP, Figma, Krita, Inkscape, Photoshop and
              AfterEffects. I’m the one responsible for making your website’s
              designs truly magnificent.
            </p>
          </div>
          <div className="flex flex-col max-w-[400px] w-full items-center gap-2">
            <Image
              src={dummyAvatar}
              alt={'people'}
              className="w-full h-auto max-w-[250px] rounded-md pointer-events-none"
            />
            <h3 className="text-white opacity-[0.5] text-2xl font-Space-Grotesk font-bold">
              Graphics Designer
            </h3>
          </div>
        </div>
      </section>
      <div className="absolute flex flex-col gap-4 left-[5%] bottom-[22vh]">
        <Link
          href="https://linkedin.com/in/k-utkarsh-21072b273"
          rel="noopener noreferrer"
          target="_blank"
        >
          <FontAwesomeIcon
            icon={faLinkedin}
            className="text-footer-number-green text-3xl opacity-50 cursor-pointer hover:opacity-100 hover:text-4xl"
          />
        </Link>
        <Link
          href="https://github.com/mk-utkarsh"
          rel="noopener noreferrer"
          target="_blank"
        >
          <FontAwesomeIcon
            icon={faGithub}
            className="text-footer-number-green text-3xl opacity-50 cursor-pointer hover:opacity-100 hover:text-4xl"
          />
        </Link>
        <Link
          href="mailto:kunwar15utkarsh@gmail.com"
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

export default Utkarsh
