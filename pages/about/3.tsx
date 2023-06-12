import { type NextPage } from 'next'
import {
  faEye,
  faHandshake,
  faLightbulb,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHand } from '@fortawesome/free-regular-svg-icons'
const AboutUS_3: NextPage = () => {
  return (
    <>
      <section>
        <div className="absolute left-1/2 top-1/2 z-50 flex -translate-x-1/2 -translate-y-1/2 flex-col gap-10 md:max-w-[700px]">
          <div className="flex flex-row justify-center gap-3 space-x-2">
            <FontAwesomeIcon
              icon={faHandshake}
              className="text-5xl text-rectangle-purp"
            />
            <FontAwesomeIcon
              icon={faEye}
              className="text-5xl text-rectangle-purp"
            />
            <FontAwesomeIcon
              icon={faLightbulb}
              className="text-5xl text-rectangle-purp"
            />
          </div>
          <h1 className="text-center font-Poppins text-3xl text-white md:text-4xl">
            <span className="craft-anim text-5xl text-transparent">
              Collaborative{' '}
            </span>{' '}
            Approach: Your Vision, Our Expertise
          </h1>
          <h3 className="text-center font-Space-Grotesk text-xl text-white md:text-2xl">
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
      <div className="absolute left-1/2 top-1/2 h-[85vh] max-h-[600px] w-[65vw] max-w-[1000px] -translate-x-1/2 -translate-y-1/2 opacity-50 hidden sm:block">
        <div className="rect-abt3-l aboslute z-0 ml-64 mt-44 h-36 w-56 rounded-md border-l-2 border-t-2 border-solid border-rectangle-purp"></div>
        <div className="rect-abt3-r absolute left-0 top-36 z-0 ml-60 mt-7 h-[400px] w-[700px] rounded-md border-l-2 border-t-2 border-solid border-rectangle-purp"></div>
        <div className="rect-abt3-r2 absolute right-0 top-0 z-0 mr-12 mt-40 h-[400px] w-[700px] rounded-md border-l-2 border-t-2 border-solid border-rectangle-purp"></div>
        {/* Responsive to be made */}
      </div>
    </>
  )
}

export default AboutUS_3
