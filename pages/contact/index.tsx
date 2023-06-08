import { type NextPage } from 'next'
import Head from 'next/head'
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import TypewriterComponent from 'typewriter-effect'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

const Contact: NextPage = () => {
  const router = useRouter()

  useEffect(() => {
    if (window.location.pathname.includes('/contact')) router.push('/')
  }, [])

  return (
    <>
      <Head>
        <title>Contact</title>
      </Head>
      <section>
        <div className="flex justify-center items-center h-screen">
          <div className="flex flex-row gap-3 justify-center absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 md:max-w-[700px] z-50">
            <FontAwesomeIcon
              icon={faPhone}
              className="text-contact-red text-4xl pt-2"
            />
            <FontAwesomeIcon
              icon={faEnvelope}
              className="text-contact-red text-5xl"
            />
            <FontAwesomeIcon
              icon={faInstagram}
              className="text-contact-red text-5xl"
            />
          </div>
          <div className="flex flex-col space-y-8 b-36 text-white font-Poppins text-center text-5xl">
            <div className="space-y-4">
              <h1>
                Do you want to start a{' '}
                <span className="stroke-contact text-transparent text-5xl">
                  project
                </span>{' '}
                ,
              </h1>
              <h1 className="">or just say hi?</h1>
            </div>

            <h1 className="font-Space-Mono" id="contact-typing-text">
              {' '}
            </h1>
          </div>
        </div>
        <div className="absolute w-[65vw] h-[85vh] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-[1000px] max-h-[600px] opacity-50">
          <div className="rect-cnt-l w-[700px] h-[400px] border-solid border-contact-red border-2 rounded-md aboslute top-0 mt-10 left-0 z-0"></div>
          <div className="rect-cnt-r w-[700px] h-[400px] border-solid border-contact-red border-2 rounded-md absolute -bottom-12 right-0 z-0 mb-6"></div>
        </div>
      </section>
    </>
  )
}

export default Contact
