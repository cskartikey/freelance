import React, { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { TextPlugin } from 'gsap/dist/TextPlugin'
import ContactUS from '@/pages/contact'
import Contact from '@/pages/contact/2'

function ContactScroll() {
  const sectionRef = useRef(null)
  const triggerRef = useRef(null)

  gsap.registerPlugin(ScrollTrigger, TextPlugin)

  useEffect(() => {
    let scrollArr = gsap.utils.toArray('.scroll-contact')
    let to = gsap.to(scrollArr, {
      xPercent: () => -100 * (scrollArr.length - 1),
      ease: 'none',
      scrollTrigger: {
        start: 'top top',
        trigger: triggerRef.current,
        markers: false,
        pin: true,
        pinSpacing: true,
        scrub: 0.6,
        invalidateOnRefresh: true,
        anticipatePin: 1,
        onEnter: function () {
          const element = document.getElementsByClassName('nav-t')
          for (let i = 0; i < element.length; i++) {
            element[i].classList.replace('text-team-green', 'text-contact-red')
          }
          gsap.set('.footer', {
            borderColor: '#F99B7D',
          })
          gsap.set('.mouse', {
            color: '#F99B7D',
          })
          gsap.set('.dotted-line', {
            borderColor: '#F99B7D',
          })
          gsap.set('.right-arrow', {
            color: '#F99B7D',
          })
          gsap.to('.footer-text', {
            x: 87,
            duration: 1,
            backgroundColor: '#F99B7D',
            text: { value: '4' },
          })
          document
            .getElementById('divider')
            ?.classList.replace(
              'divide-footer-number-green',
              'divide-footer-number-ured'
            )
          gsap.set('.scroll-text', { backgroundColor: '#F99B7D' })
          gsap.to('.scroll-text', {
            x: '43vw',
            duration: 1,
            scrollTrigger: {
              start: 'top top',
              trigger: '.c2',
              markers: false,
              scrub: 1,
              end: () => '+=' + window.innerWidth,
            },
          })
          gsap.to('#contact-typing-text', {
            text: { value: 'We’d <span class="stroke-contact text-transparent">love</span> to hear from you!' },
            duration: 3,
            delay: 0.5,
            ease: 'none',
          })
        },
        onLeaveBack() {
          const element = document.getElementsByClassName('nav-t')
          for (let i = 0; i < element.length; i++) {
            element[i].classList.replace('text-contact-red', 'text-team-green')
          }
          gsap.set('.footer', {
            borderColor: '#A0D8B3',
          })
          gsap.set('.mouse', {
            color: '#A0D8B3',
          })
          gsap.set('.dotted-line', {
            borderColor: '#A0D8B3',
          })
          gsap.set('.right-arrow', {
            color: '#A0D8B3',
          })
          gsap.to('.footer-text', {
            x: 59,
            duration: 1,
            backgroundColor: '#A0D8B3',
            text: { value: '3' },
          })
          document
            .getElementById('divider')
            ?.classList.replace(
              'divide-footer-number-ured',
              'divide-footer-number-green'
            )
          gsap.set('.scroll-text', { backgroundColor: '#A0D8B3' })
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
        <div className="h-screen w-[350vw] flex relative bg-red-rectangle-pattern">
          <div
            className="scroll-contact h-screen w-screen flex justify-center items-center"
            ref={sectionRef}
          >
            <ContactUS />
          </div>
          <div
            ref={sectionRef}
            className="scroll-contact h-screen w-screen flex justify-center items-center c2"
          >
            <Contact />
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactScroll
