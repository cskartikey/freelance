import React, { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { TextPlugin } from 'gsap/dist/TextPlugin'
import ContactUS from '@/pages/contact'
import Contact from '@/pages/contact/2'
import { Power2 } from 'gsap'

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
          window.history.replaceState(null, '', '/contact')
          document.title = 'Freelance: Contact'
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
            text: {
              value:
                'We’d <span class="stroke-contact text-transparent">love</span> to hear from you!',
            },
            duration: 2,
            delay: 0.2,
            ease: 'none',
          })
          let cnt1 = gsap.timeline({
            defaults: { duration: 2, ease: Power2.easeInOut, opacity: 1 },
          })
          cnt1.to('.rect-cnt-l', {
            x: -180,
            y: -160,
            borderBottom: 2,
            borderRight: 2,
          })
          cnt1.to(
            '.rect-cnt-r',
            { x: 180, y: 50, borderBottom: 2, borderRight: 2 },
            '<'
          )
        },
        onLeaveBack() {
          window.history.replaceState(null, '', '/team/utkarsh')
          document.title = 'Kunwar Utkarsh'
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
    let cnt2 = gsap.timeline({
      defaults: { duration: 2, ease: Power2.easeInOut, opacity: 1 },
      scrollTrigger: {
        start: 'top -20%',
        trigger: '.c2',
        invalidateOnRefresh: true,
      },
    })
    cnt2.to('.rect-cnt2-l', {
      x: 180,
      y: -200,
      borderBottom: 2,
      borderRight: 2,
    })
    cnt2.to(
      '.rect-cnt2-r',
      { x: -300, y: 10, borderBottom: 2, borderRight: 2 },
      '<'
    )
    return () => {
      to.kill()
    }
  }, [])

  return (
    <section className="hidden overflow-hidden sm:block" id="contact-scroll">
      <div ref={triggerRef}>
        <div className="relative flex h-screen w-[350vw] bg-red-rectangle-pattern">
          <div
            className="scroll-contact flex h-screen w-screen items-center justify-center"
            ref={sectionRef}
          >
            <ContactUS />
          </div>
          <div
            ref={sectionRef}
            className="scroll-contact c2 flex h-screen w-screen items-center justify-center"
          >
            <Contact />
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactScroll
