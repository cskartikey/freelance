import Image from 'next/image'
import image from 'assets/svg/Image.svg'
import Head from 'next/head'
import React, { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { Power2 } from 'gsap'

export default function Hero() {
  gsap.registerPlugin(ScrollTrigger)

  useEffect(() => {
    let tl = gsap.timeline({
      defaults: { duration: 2, ease: Power2.easeInOut },
    })
    tl.to('.shape-l', { x: -40, y: -20 })
    tl.to('.shape-r', { x: 40, y: 20 }, '<')
    tl.to('.shape-r-2', { x: 40, y: 30 }, '<')

    gsap.to('.hero', {
      scrollTrigger: {
        start: 'top top',
        trigger: '.hero',
        markers: false,
        onEnter: function () {
          if (tl.progress() < 1) {
            tl.play()
          }
        },
        onLeaveBack: function () {
          tl.reverse(0)
        },
      },
    })
  })
  return (
    <main
      className="hero flex h-screen items-center justify-center bg-blue-triange-pattern text-4xl sm:text-5xl"
      id="hero-section"
    >
      <Head>
        <title>Kode Crumbs: Freelance</title>
      </Head>
      <section>
        <div className="mb-96 pb-40 sm:pb-0 sm:mb-12 mr-96 sm:pr-40">
          <div className="hidden absolute inset-0 z-10 sm:flex items-center justify-center">
            <Image
              src={image}
              alt="A landscape image of a person's hand writing on a notebook on a black wood table and a MacBook on it."
            />
          </div>
          <div className="flex h-full flex-col space-y-3 sm:space-y-4 border-l border-nav-blue sm:pl-5 pl-56 ">
            <span className="z-20 text-6xl font-Hurricane sm:text-8xl text-white">
              Designing
            </span>
            <span className="z-20 font-Poppins text-white">and</span>
            <span className="z-20 font-Space-Mono text-white">
              <span className="opacity-50">&lt;</span>developing
              <span className="opacity-50">/&gt;</span>
            </span>
            <span className="z-20 font-Poppins text-white">
              websites for <span className="text-nav-blue">business</span>
            </span>
            <div className='sm:hidden text-white text-2xl rounded-lg bg-button bg-opacity-70 font-semibold h-14 text-center pt-3 w-52'>
                Contact Now
            </div>
          </div>
        </div>
      </section>
      <div className="hidden sm:block absolute left-1/2 top-1/2 h-[85vh] max-h-[600px] w-[65vw] max-w-[1000px] -translate-x-1/2 -translate-y-1/2 transform">
        <div className="shape-l absolute left-0 top-0 z-0 ml-10 mt-4 h-80 w-3/6 rounded-md border-2 border-solid border-nav-blue opacity-50"></div>
        <div className="shape-r absolute bottom-0 right-0 z-0 h-5/6 w-5/6 rounded-md border-2 border-solid border-nav-blue opacity-50"></div>
        <div className="shape-r-2 absolute -bottom-6 -right-8 z-0 h-3/6 w-3/6 rounded-md border-2 border-solid border-nav-blue opacity-50"></div>
      </div>
    </main>
  )
}
