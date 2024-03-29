import { type NextPage } from 'next'
import Head from 'next/head'
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
        <div className="flex flex-col gap-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 md:max-w-[700px] z-50">
          <div className="flex flex-row gap-3 justify-center space-x-2">
            <FontAwesomeIcon
              icon={faFire}
              className="text-rectangle-purp text-5xl"
            />
            <FontAwesomeIcon
              icon={faClock}
              className="text-rectangle-purp text-5xl"
            />
            <FontAwesomeIcon
              icon={faDollarSign}
              className="text-rectangle-purp text-5xl"
            />
          </div>
          <h1 className="font-Poppins text-white text-3xl text-center md:text-4xl">
            We build your website within the desired time and at an affordable
            rate.
          </h1>
          <h3 className="font-Space-Grotesk text-white text-xl text-center md:text-2xl">
            Little bit about the development cost and domain cost and where to
            go if u dont fkin kno whts a domain...
          </h3>
        </div>
      </section>
      <div className="absolute w-[65vw] h-[85vh] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-[1000px] max-h-[600px] opacity-50">
        <div className="w-56 h-36 border-solid border-rectangle-purp border-2 rounded-md aboslute mt-20 ml-44 z-0"></div>
        <div className="w-[700px] h-[400px] border-solid border-rectangle-purp border-2 rounded-md absolute top-36 left-0 z-0"></div>
        <div className="w-[700px] h-[400px] border-solid border-rectangle-purp border-2 rounded-md absolute top-0 right-0 z-0"></div>
        {/* Responsive to be made */}
      </div>
    </>
  )
}

export default AboutUS_2
