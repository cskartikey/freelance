import { type NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import uktarsh from '../../assets/png/kunwar.jpeg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelopesBulk } from '@fortawesome/free-solid-svg-icons'

const Utkarsh: NextPage = () => {
  return (
    <>
      <section className="w-screen">
        <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 gap-6">
          <div className="flex max-w-[550px] flex-col gap-16">
            <div className="font-Space-Grotesk text-4xl text-white">
              Hi There!
            </div>
            <p className="font-Poppins text-lg text-white">
              I am Kunwar{' '}
              <span className="stroke-team text-5xl text-transparent">
                Utkarsh
              </span>
              . I have around 4 years of experience in Graphics Designing. Being
              fascinated by web development, the creative side of mine paid off
              to make me a skilled Designer. I am proficient in GIMP, Figma,
              Krita, Inkscape, Photoshop and AfterEffects. I’m the one
              responsible for making your website’s designs truly magnificent.
            </p>
          </div>
          <div className="flex w-full max-w-[400px] flex-col items-center gap-2">
            <Image
              src={uktarsh}
              alt={'portrait of Kunwar Utkarsh, our second Graphics Designer'}
              className="pointer-events-none h-auto w-full max-w-[250px] rounded-md"
            />
            <h3 className="font-Space-Grotesk text-2xl font-bold text-white opacity-[0.5]">
              Graphics Designer
            </h3>
          </div>
        </div>
      </section>
      <div className="absolute bottom-[22vh] left-[5%] flex flex-col gap-4">
        <Link
          href="https://linkedin.com/in/k-utkarsh-21072b273"
          rel="noopener noreferrer"
          target="_blank"
        >
          <FontAwesomeIcon
            icon={faLinkedin}
            className="cursor-pointer text-3xl text-footer-number-green opacity-50 hover:text-4xl hover:opacity-100"
          />
        </Link>
        <Link
          href="https://github.com/mk-utkarsh"
          rel="noopener noreferrer"
          target="_blank"
        >
          <FontAwesomeIcon
            icon={faGithub}
            className="cursor-pointer text-3xl text-footer-number-green opacity-50 hover:text-4xl hover:opacity-100"
          />
        </Link>
        <Link
          href="mailto:kunwar15utkarsh@gmail.com"
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

export default Utkarsh
