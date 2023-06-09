import { type NextPage } from 'next'
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
const Contact: NextPage = () => {
  return (
    <>
      <section>
        <div className="flex h-screen items-center justify-center">
          <div className="flex flex-col space-y-12 pb-24 font-Poppins text-4xl text-white">
            <Link href="mailto:freelance@kodec.tech" className="z-50">
              <div className="group z-50 space-y-4 border-2 border-footer-number-ured border-opacity-33 p-7 hover:border-opacity-100">
                <h1 className="font-Space-Grotesk opacity-50 group-hover:opacity-100">
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    className="pr-4 text-footer-number-ured"
                  />{' '}
                  freelance@kodec.tech{' '}
                  <span className="pl-24 font-Poppins text-3xl font-bold">
                    MAIL US
                  </span>
                </h1>
              </div>
            </Link>
            <div className="group z-50 space-y-4 border-2 border-footer-number-ured border-opacity-33 p-7 hover:border-opacity-100">
              <h1 className="font-Space-Grotesk opacity-50 group-hover:opacity-100">
                <FontAwesomeIcon
                  icon={faPhone}
                  className="pr-4 text-footer-number-ured"
                />{' '}
                +91 7518927291
                <span className="pl-56 font-Poppins text-3xl font-bold">
                  CALL US
                </span>
              </h1>
            </div>
            <Link
              href="https://www.instagram.com/kode.crumbs/"
              className="z-50"
            >
              <div className="group z-50 space-y-4 border-2 border-footer-number-ured border-opacity-33 p-7 hover:border-opacity-100">
                <div className="font-Space-Grotesk opacity-50 group-hover:opacity-100">
                  <FontAwesomeIcon
                    icon={faInstagram}
                    className="pr-4 text-footer-number-ured"
                  />{' '}
                  @kode.crumbs{' '}
                  <span className="pl-64 font-Poppins text-3xl font-bold">
                    DM US
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </div>
        <div className="absolute left-1/2 top-1/2 h-[85vh] max-h-[600px] w-[65vw] max-w-[1000px] -translate-x-1/2 -translate-y-1/2 opacity-50">
          <div className="rect-cnt2-l aboslute left-0 top-0 z-0 -mt-10 h-[350px] w-[500px] rounded-md border border-solid border-contact-red"></div>
          <div className="rect-cnt2-r absolute -bottom-12 right-0 z-0 mb-20 h-[400px] w-[700px] rounded-md border border-solid border-contact-red"></div>
        </div>
      </section>
    </>
  )
}

export default Contact
