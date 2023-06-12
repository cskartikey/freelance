import { type NextPage } from 'next'
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

const Contact: NextPage = () => {
  const router = useRouter()

  useEffect(() => {
    if (window.location.pathname.includes('/contact')) router.push('/')
  }, [])

  return (
    <>
      <section>
        <div className="flex h-screen items-center justify-center">
          <div className="absolute left-1/2 top-1/3 z-50 flex -translate-x-1/2 -translate-y-1/2 flex-row justify-center gap-3 md:max-w-[700px]">
            <FontAwesomeIcon
              icon={faPhone}
              className="pt-2 text-4xl text-contact-red"
            />
            <FontAwesomeIcon
              icon={faEnvelope}
              className="text-5xl text-contact-red"
            />
            <FontAwesomeIcon
              icon={faInstagram}
              className="text-5xl text-contact-red"
            />
          </div>
          <div className="b-36 z-50 flex flex-col space-y-8 text-center font-Poppins text-5xl text-white">
            <div className="space-y-4">
              <h1>
                Do you want to start a{' '}
                <span className="stroke-contact text-5xl text-transparent">
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
        <div className="absolute left-1/2 top-1/2 h-[85vh] max-h-[600px] w-[65vw] max-w-[1000px] -translate-x-1/2 -translate-y-1/2 opacity-50">
          <div className="rect-cnt-l aboslute left-0 top-0 z-0 ml-36 mt-48 h-[400px] w-[700px] rounded-md border-l-2 border-t-2 border-solid border-contact-red"></div>
          <div className="rect-cnt-r absolute -bottom-12 right-0 z-0 mb-12 mr-32 h-[400px] w-[700px] rounded-md border-l-2 border-t-2 border-solid border-contact-red"></div>
        </div>
      </section>
    </>
  )
}

export default Contact
