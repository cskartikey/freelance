import { type NextPage } from 'next'
import {
  faFire,
  faClock,
  faDollarSign,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const AboutUS_2: NextPage = () => {
  return (
    <>
      <section>
        <div className="relative left-1/2 top-1/2 z-50 flex -translate-x-1/2  flex-col gap-5 sm:gap-10 md:max-w-[700px]">
          <div className="z-50 flex flex-row sm:justify-center gap-3 mt-28 sm:ml-0 ml-4">
            <FontAwesomeIcon
              icon={faFire}
              className="text-4xl sm:text-5xl text-rectangle-purp"
            />
            <FontAwesomeIcon
              icon={faClock}
              className="text-4xl sm:text-5xl text-rectangle-purp"
            />
            <FontAwesomeIcon
              icon={faDollarSign}
              className="text-4xl sm:text-5xl text-rectangle-purp"
            />
          </div>
          <h1 className="text-start sm:text-center font-Poppins text-3xl text-white md:text-4xl sm:mr-16 ml-4 max-w-screen-sm">
            We Deliver Fast,{' '}
            <span className="sm:craft-anim craft-anim-mobile text-4xl lg:text-5xl text-transparent">
              Affordable
            </span>
            , and On-Time Solutions
          </h1>
          <h3 className="text-center font-Space-Grotesk text-xl text-white md:text-2xl max-w-screen-sm px-4">
            We value your time and money. With our streamlined project
            management using Trello and Github, we work swiftly to deliver
            exceptional results and ensure seamless collaboration. Our pricing
            is affordable and transparent, with no hidden costs. We provide you
            with a clear breakdown of expenses,{' '}
            <span className="underline underline-offset-2">
              {' '}
              empowering you to make informed decisions.{' '}
            </span>
          </h3>
        </div>
      </section>
      <div className="absolute left-1/2 top-1/2 h-[85vh] max-h-[600px] w-[65vw] max-w-[1000px] -translate-x-1/2 -translate-y-1/2 opacity-50 hidden sm:block">
        <div className="rect-abt2-l aboslute z-0 ml-64 mt-44 h-36 w-56 rounded-md border-l-2 border-t-2 border-solid border-rectangle-purp"></div>
        <div className="rect-abt2-r absolute left-0 top-36 z-0 ml-60 mt-7 h-[400px] w-[700px] rounded-md border-l-2 border-t-2 border-solid border-rectangle-purp"></div>
        <div className="rect-abt2-r2 absolute right-0 top-0 z-0 mr-12 mt-40 h-[400px] w-[700px] rounded-md border-l-2 border-t-2 border-solid border-rectangle-purp"></div>
        {/* Responsive to be made */}
      </div>
    </>
  )
}

export default AboutUS_2
