import { type NextPage } from 'next'
import Head from 'next/head'
import { faHtml5, faCss3Alt, faJs } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const AboutUS: NextPage = () => {
  return (
    <>
      <Head>
        <title>About</title>
      </Head>
      <section>
        <div className="flex flex-col gap-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 md:max-w-[700px] z-50">
          <div className="flex flex-row gap-3 justify-center">
            <FontAwesomeIcon
              icon={faHtml5}
              className="text-rectangle-purp text-5xl"
            />
            <FontAwesomeIcon
              icon={faCss3Alt}
              className="text-rectangle-purp text-5xl"
            />
            <FontAwesomeIcon
              icon={faJs}
              className="text-rectangle-purp text-5xl"
            />
          </div>
          <h1 className="font-Poppins text-white text-3xl text-center md:text-4xl">
            We build your website with utmost dedication, making use of the....
          </h1>
          <h3 className="font-Space-Grotesk text-white text-xl text-center md:text-2xl">
            kuch to... involving lil bit abt JS, CSS... animations blah blah.
            Lorem Ipsum Dolo res it etc etc
          </h3>
        </div>
      </section>
      <div className="absolute w-[65vw] h-[85vh] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-[1000px] max-h-[600px] opacity-50">
        <div className="w-[520px] h-[300px] border-solid border-rectangle-purp border-2 rounded-md aboslute top-0 mt-10 left-0 z-0"></div>
        <div className="w-[700px] h-[400px] border-solid border-rectangle-purp border-2 rounded-md absolute -bottom-12 right-0 z-0 mb-6"></div>
        {/* Responsive to be made */}
      </div>
    </>
  )
}

export default AboutUS
