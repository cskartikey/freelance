import { type NextPage } from 'next'
import Head from 'next/head'
import {
  faEye,
  faHandshake,
  faLaptopCode,
  faLightbulb,
  faMobileAndroid,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHand } from '@fortawesome/free-regular-svg-icons'
const AboutUS_3: NextPage = () => {
  return (
    <>
      <section>
        <div className="flex flex-col gap-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 md:max-w-[700px] z-50">
          <div className="flex flex-row gap-3 justify-center space-x-2">
            <FontAwesomeIcon
              icon={faHandshake}
              className="text-rectangle-purp text-5xl"
            />
            <FontAwesomeIcon
              icon={faEye}
              className="text-rectangle-purp text-5xl"
            />
            <FontAwesomeIcon
              icon={faLightbulb}
              className="text-rectangle-purp text-5xl"
            />
          </div>
          <h1 className="font-Poppins text-white text-3xl text-center md:text-4xl">
            <span className="craft-anim text-5xl text-transparent">
              Collaborative{' '}
            </span>{' '}
            Approach: Your Vision, Our Expertise
          </h1>
          <h3 className="font-Space-Grotesk text-white text-xl text-center md:text-2xl">
            We emphasize our collaborative approach to website development. We
            understand the significance of{' '}
            <span className="underline underline-offset-2">
              aligning our expertise with your vision
            </span>
            . By working closely with you, we ensure that your unique
            requirements and goals are met throughout the development process.
            Together, we'll bring your ideas to life and create a website that
            exceeds your expectations.
          </h3>
        </div>
      </section>
      <div className="absolute w-[65vw] h-[85vh] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-[1000px] max-h-[600px] opacity-50">
        <div className="rect-abt3-l w-56 h-36 border-solid border-rectangle-purp border-2 rounded-md aboslute mt-20 ml-44 z-0"></div>
        <div className="rect-abt3-r w-[700px] h-[400px] border-solid border-rectangle-purp border-2 rounded-md absolute top-36 left-0 z-0"></div>
        <div className="rect-abt3-r2 w-[700px] h-[400px] border-solid border-rectangle-purp border-2 rounded-md absolute top-0 right-0 z-0"></div>
        {/* Responsive to be made */}
      </div>
    </>
  )
}

export default AboutUS_3
