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
      className="hero flex h-screen items-center justify-center overflow-x-hidden bg-mobile-blue-triangle-pattern text-4xl md:bg-blue-triange-pattern lg:text-5xl"
      id="hero-section"
    >
      <Head>
        <title>Kode Crumbs: Freelance</title>
      </Head>
      <section>
        <div className="mb-[35vh] mr-[35vw] sm:mb-12 sm:mr-96 sm:pb-0 sm:pr-40">
          <div className="absolute bottom-[10vh] left-[7vw] z-10 w-[85vw] items-center justify-center sm:flex md:left-32 md:w-2/3 lg:inset-0 lg:w-full">
            <Image
              src={image}
              alt="A landscape image of a person's hand writing on a notebook on a black wood table and a MacBook on it."
              className="rounded-md sm:rounded-none"
            />
          </div>
          <div className="ml-[15vh] flex h-full flex-col space-y-3 border-l border-nav-blue pl-5 sm:space-y-4 sm:pl-5 lg:ml-0">
            <span className="z-20 font-Hurricane text-6xl text-white md:text-7xl lg:text-8xl">
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
            <div className="h-14 w-52 rounded-lg bg-button bg-opacity-70 pt-3 text-center text-2xl font-semibold text-white sm:hidden">
              Contact Now
            </div>
          </div>
        </div>
      </section>
      <div className="absolute left-1/2 top-1/2 hidden h-[85vh] max-h-[600px] w-[65vw] max-w-[1000px] -translate-x-1/2 -translate-y-1/2 transform sm:block">
        <div className="shape-l absolute left-0 top-0 z-0 ml-10 mt-4 rounded-md border-2 border-solid border-nav-blue opacity-50 md:h-96 md:w-7/12 lg:h-80 lg:w-3/6"></div>
        <div className="shape-r absolute bottom-0 z-0 rounded-md border-2 border-solid border-nav-blue opacity-50 md:-right-24 md:h-5/6 md:w-full lg:right-0 lg:h-4/6 lg:w-5/6"></div>
        <div className="shape-r-2 absolute -bottom-6 z-0 rounded-md border-2 border-solid border-nav-blue opacity-50 md:-right-28 md:h-4/6 md:w-4/6 lg:-right-8 lg:h-3/6 lg:w-3/6"></div>
      </div>
    </main>
  )
}
