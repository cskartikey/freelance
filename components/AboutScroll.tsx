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
          window.history.replaceState(null, '', '/about')
          document.title = 'Freelance: About'
          const navBarText = document.getElementsByClassName('nav-t')
          for (let i = 0; i < navBarText.length; i++) {
            navBarText[i].classList.replace(
              'text-nav-blue',
              'text-rectangle-purp'
            )
          }
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
          let abt1 = gsap.timeline({
            defaults: { duration: 2, ease: Power2.easeInOut, opacity: 1 },
          })
          abt1.to('.rect-abt-l', {
            x: -180,
            y: -160,
            borderBottom: 2,
            borderRight: 2,
          })
          abt1.to(
            '.rect-abt-r',
            { x: 180, y: 50, borderBottom: 2, borderRight: 2 },
            '<'
          )
        },
        onLeaveBack() {
          window.history.replaceState(null, '', '/')
          document.title = 'Kode Crumbs: Freelance'
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
    let abt2 = gsap.timeline({
      defaults: { duration: 2, ease: Power2.easeInOut, opacity: 1 },
      scrollTrigger: {
        start: 'top -20%',
        trigger: '.a2',
        invalidateOnRefresh: true,
      },
    })
    abt2.to('.rect-abt2-l', { x: -100, y: -110, borderBottom: 2, borderRight: 2 })
    abt2.to(
      '.rect-abt2-r',
      { x: -160, y: 10, borderBottom: 2, borderRight: 2 },
      '<'
    )
    abt2.to(
      '.rect-abt2-r2',
      { x: 160, y: -120, borderBottom: 2, borderRight: 2 },
      '<'
    )
    let abt3 = gsap.timeline({
      defaults: { duration: 2, ease: Power2.easeInOut, opacity: 1 },
      scrollTrigger: {
        start: 'top -120%',
        trigger: '.a3',
        invalidateOnRefresh: true,
      },
    })
    abt3.to('.rect-abt3-l', { x: 550, y: 250, borderBottom: 2, borderRight: 2 })
    abt3.to(
      '.rect-abt3-r',
      { x: -160, y: 10, borderBottom: 2, borderRight: 2 },
      '<'
    )
    abt3.to(
      '.rect-abt3-r2',
      { x: 160, y: -120, borderBottom: 2, borderRight: 2 },
      '<'
    )
    return () => {
      to.kill()
    }
  }, [])

  return (
    <section className="overflow-hidden" id="about-scroll">
      <div ref={triggerRef}>
        <div className="wrap relative flex h-screen w-[350vw] bg-purp-rectangle-pattern">
          <div
            className="scroll a1 flex h-screen w-screen items-center justify-center"
            ref={sectionRef}
          >
            <AboutUS />
          </div>
          <div
            ref={sectionRef}
            className="scroll a2 flex h-screen w-screen items-center justify-center"
          >
            <AboutUS_2 />
          </div>
          <div
            ref={sectionRef}
            className="scroll  a3 flex h-screen w-screen items-center justify-center"
          >
            <AboutUS_3 />
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutScroll
