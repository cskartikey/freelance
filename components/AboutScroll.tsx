import React, { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { Power2 } from 'gsap'
import AboutUS from '@/pages/about'
import AboutUS_2 from '@/pages/about/2'
import AboutUS_3 from '@/pages/about/3'

function AboutScroll() {
  const sectionRef = useRef(null)
  const triggerRef = useRef(null)

  gsap.registerPlugin(ScrollTrigger)

  useEffect(() => {
    let scrollArr = gsap.utils.toArray('.scroll')
    gsap.set('.rect-abt-l', {
      x: 60,
      y: 80,
      borderRight: 0,
      borderTop: 2,
      borderLeft: 2,
      borderBottom: 0,
    })
    gsap.set('.rect-abt-r', {
      x: 0,
      y: 0,
      borderRight: 0,
      borderTop: 2,
      borderLeft: 2,
      borderBottom: 0,
    })
    let tl = gsap.timeline({
      defaults: { duration: 2, ease: Power2.easeInOut, opacity: 1 },
    })
    tl.to('.rect-abt-l', { x: -40, y: -20, borderBottom: 2, borderRight: 2 })
    tl.to('.rect-abt-r', { x: 40, y: 20, borderBottom: 2, borderRight: 2 }, '<')
    let to = gsap.to(scrollArr, {
      xPercent: () => -100 * (scrollArr.length - 1),
      ease: Power2.easeInOut,
      scrollTrigger: {
        start: 'top top',
        trigger: sectionRef.current,
        markers: false,
        pin: true,
        pinSpacing: true,
        scrub: 0.8,
        invalidateOnRefresh: true,
        anticipatePin: 1,
        snap: 1 / (scrollArr.length - 1),
        onEnter: function () {
          const element = document.getElementsByClassName('nav-t')
          for (let i = 0; i < element.length; i++) {
            element[i].classList.replace('text-nav-blue', 'text-rectangle-purp')
          }
        },
        onLeaveBack() {
          const element = document.getElementsByClassName('nav-t')
          for (let i = 0; i < element.length; i++) {
            element[i].classList.replace('text-rectangle-purp', 'text-nav-blue')
          }
        },
        end: () => '+=' + window.innerWidth,
      },
    })
    return () => {
      to.kill()
    }
  }, [])

  return (
    <section className="overflow-hidden" id="about-scroll">
      <div ref={triggerRef}>
        <div
          ref={sectionRef}
          className="h-screen w-[350vw] flex relative bg-purp-rectangle-pattern"
        >
          <div className="scroll h-screen w-screen flex justify-center items-center">
            <AboutUS />
          </div>
          <div
            ref={sectionRef}
            className="scroll h-screen w-screen flex justify-center items-center "
          >
            <AboutUS_2 />
          </div>
          <div
            ref={sectionRef}
            className="scroll  h-screen w-screen flex justify-center items-center "
          >
            <AboutUS_3 />
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutScroll
