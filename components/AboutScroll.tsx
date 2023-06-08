import React, { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { TextPlugin } from 'gsap/dist/TextPlugin'
import { Power2 } from 'gsap'
import AboutUS from '@/pages/about'
import AboutUS_2 from '@/pages/about/2'
import AboutUS_3 from '@/pages/about/3'

function AboutScroll() {
  const sectionRef = useRef(null)
  const triggerRef = useRef(null)

  gsap.registerPlugin(ScrollTrigger, TextPlugin)

  useEffect(() => {
    let scrollArr = gsap.utils.toArray<HTMLElement>('.scroll')
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
          const navBarText = document.getElementsByClassName('nav-t')
          for (let i = 0; i < navBarText.length; i++) {
            navBarText[i].classList.replace(
              'text-nav-blue',
              'text-rectangle-purp'
            )
          }
          console.log(sectionRef.current)
          gsap.set('.footer', {
            borderColor: '#9376E0',
          })
          gsap.set('.mouse', {
            color: '#9376E0',
          })
          gsap.set('.dotted-line', {
            borderColor: '#9376E0',
          })
          gsap.set('.right-arrow', {
            color: '#9376E0',
          })
          gsap.to('.footer-text', {
            x: 30,
            duration: 1,
            backgroundColor: '#F3BCC8',
            text: { value: '2' },
          })
          gsap.set('.scroll-text', { backgroundColor: '#9376E0' })
          gsap.to('.scroll-text', {
            x: '15vw',
            duration: 1,
            scrollTrigger: {
              start: 'top top',
              trigger: '.a3',
              markers: false,
              scrub: 1,
              end: () => '+=' + window.innerWidth,
            },
          })
          document
            .getElementById('divider')
            ?.classList.replace('divide-nav-blue', 'divide-rectangle-purp')
        },
        onLeaveBack() {
          const navBarText = document.getElementsByClassName('nav-t')
          for (let i = 0; i < navBarText.length; i++) {
            navBarText[i].classList.replace(
              'text-rectangle-purp',
              'text-nav-blue'
            )
          }
          gsap.set('.footer', {
            borderColor: '#3EA9F2',
          })
          gsap.set('.mouse', {
            color: '#3EA9F2',
          })
          gsap.set('.dotted-line', {
            borderColor: '#3EA9F2',
          })
          gsap.set('.right-arrow', {
            color: '#3EA9F2',
          })
          gsap.to('.footer-text', {
            x: 0,
            duration: 1,
            backgroundColor: '#BBE1FA',
            text: { value: '1' },
          })
          document
            .getElementById('divider')
            ?.classList.replace('divide-rectangle-purp', 'divide-nav-blue')
          gsap.set('.scroll-text', { backgroundColor: '#BBE1FA' })
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
        <div className="h-screen w-[350vw] flex relative bg-purp-rectangle-pattern wrap">
          <div
            className="scroll h-screen w-screen flex justify-center items-center n1"
            ref={sectionRef}
          >
            <AboutUS />
          </div>
          <div
            ref={sectionRef}
            className="scroll h-screen w-screen flex justify-center items-center"
          >
            <AboutUS_2 />
          </div>
          <div
            ref={sectionRef}
            className="scroll  h-screen w-screen flex justify-center items-center a3"
          >
            <AboutUS_3 />
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutScroll
