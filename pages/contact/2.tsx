import { type NextPage } from "next";
import Head from "next/head";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TypewriterComponent from "typewriter-effect";
import Link from "next/link";
const Contact: NextPage = () => {
  return (
    <>
      <Head>
        <title>Contact</title>
      </Head>
      <section>
        <div className="flex justify-center items-center h-screen">
          <div className="flex flex-col space-y-12 pb-24 text-white font-Poppins text-4xl">
            <div className="space-y-4 p-7 border-2 border-footer-number-ured border-opacity-33 hover:border-opacity-100 z-50">
              <h1 className="font-Space-Grotesk opacity-50 hover:opacity-100"><FontAwesomeIcon icon={faEnvelope} className="text-footer-number-ured pr-4"/> freelance@kodec.tech <span className="font-Poppins pl-24 font-bold text-3xl">MAIL US</span></h1>
            </div>
            <div className="space-y-4 p-7 border-2 border-footer-number-ured border-opacity-33 hover:border-opacity-100 z-50">
              <h1 className="font-Space-Grotesk opacity-50 hover:opacity-100"><FontAwesomeIcon icon={faPhone} className="text-footer-number-ured pr-4"/> +91 7518927291<span className="font-Poppins pl-56 font-bold text-3xl">CALL US</span></h1>
            </div>
            <div className="space-y-4 p-7 border-2 border-footer-number-ured border-opacity-33 hover:border-opacity-100 z-50">
              <a href="https://instagram.com/" className="font-Space-Grotesk opacity-50 hover:opacity-100"><FontAwesomeIcon icon={faInstagram} className="text-footer-number-ured pr-4"/> @kodecrumbs <span className="font-Poppins pl-64 font-bold text-3xl">DM US</span></a>
            </div>
          </div>
        </div>
        <div className="absolute w-[65vw] h-[85vh] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-[1000px] max-h-[600px] opacity-50">
          <div className="w-[700px] h-[400px] border-solid border-contact-red border-2 rounded-md aboslute top-0 mt-10 left-0 z-0"></div>
          <div className="w-[700px] h-[400px] border-solid border-contact-red border-2 rounded-md absolute -bottom-12 right-0 z-0 mb-6"></div>
        </div>
      </section>
    </>
  );
};

export default Contact;
