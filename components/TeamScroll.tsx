import React, { useRef, useEffect, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { Power2 } from 'gsap'
import Team from '@/pages/team'
import Kartikey from '@/pages/team/Kartikey'
import Chitransh from '@/pages/team/Chitransh'
import Utkarsh from '@/pages/team/Utkarsh'

function TeamScroll() {
  const sectionRef = useRef(null)
  const triggerRef = useRef(null)

  gsap.registerPlugin(ScrollTrigger)

  useEffect(() => {
    let scrollArr = gsap.utils.toArray('.scroll-team')
    console.log(scrollArr.length)
    let to = gsap.to(scrollArr, {
      xPercent: () => -100 * (scrollArr.length - 1),
      ease: 'none',
      duration: 1,
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
            element[i].classList.replace(
              'text-rectangle-purp',
              'text-team-green'
            )
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
              'divide-rectangle-purp',
              'divide-footer-number-green'
            )
          gsap.set('.scroll-text', { backgroundColor: '#A0D8B3' })
          gsap.to('.scroll-text', {
            x: '30vw',
            duration: 1,
            scrollTrigger: {
              start: 'top top',
              trigger: '.t3',
              markers: false,
              scrub: 1,
              end: () => '+=' + window.innerWidth,
            },
          })
          gsap.to('.team-typing-text', {
            text: { value: 'Unleashing the Power of Collaboration: Meet Our Team' },
            duration: 4,
            delay: 0.5,
            ease: 'none',
          })
        },
        onLeaveBack() {
          const element = document.getElementsByClassName('nav-t')
          for (let i = 0; i < element.length; i++) {
            element[i].classList.replace(
              'text-team-green',
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
          document
            .getElementById('divider')
            ?.classList.replace(
              'divide-footer-number-green',
              'divide-rectangle-purp'
            )
          gsap.set('.scroll-text', { backgroundColor: '#9376E0' })
        },
        end: () => '+=' + window.innerWidth,
      },
    })

    return () => {
      to.kill()
    }
  }, [])

  return (
    <section className="overflow-hidden" id="team-scroll">
      <div ref={triggerRef}>
        <div className="h-screen w-[460vw] flex relative bg-green-triange-pattern">
          <div
            className="scroll-team h-screen w-screen flex justify-center items-center"
            ref={sectionRef}
          >
            <Team />
          </div>
          <div
            ref={sectionRef}
            className="scroll-team h-screen w-screen flex justify-center items-center ta-2"
          >
            <Kartikey />
          </div>
          <div
            ref={sectionRef}
            className="scroll-team  h-screen w-screen flex justify-center items-center "
          >
            <Chitransh />
          </div>
          <div
            ref={sectionRef}
            className="scroll-team  h-screen w-screen flex justify-center items-center t3"
          >
            <Utkarsh />
          </div>
        </div>
      </div>
    </section>
  )
}

export default TeamScroll
