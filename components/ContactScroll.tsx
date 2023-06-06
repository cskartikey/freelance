import React, { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { Power2 } from 'gsap'
import ContactUS from '@/pages/contact'
import Contact from '@/pages/contact/2'

function ContactScroll() {
  const sectionRef = useRef(null)
  const triggerRef = useRef(null)

  gsap.registerPlugin(ScrollTrigger)

  useEffect(() => {
    let scrollArr = gsap.utils.toArray('.scroll-contact')
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
            element[i].classList.replace('text-team-green', 'text-contact-red')
          }
        },
        onLeaveBack() {
          const element = document.getElementsByClassName('nav-t')
          for (let i = 0; i < element.length; i++) {
            element[i].classList.replace('text-contact-red', 'text-team-green')
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
    <section className="overflow-hidden" id="contact-scroll">
      <div ref={triggerRef}>
        <div
          ref={sectionRef}
          className="h-screen w-[350vw] flex relative bg-red-rectangle-pattern"
        >
          <div className="scroll-contact h-screen w-screen flex justify-center items-center">
            <ContactUS />
          </div>
          <div
            ref={sectionRef}
            className="scroll-contact h-screen w-screen flex justify-center items-center "
          >
            <Contact />
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactScroll
