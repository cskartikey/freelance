import React, { useRef, useEffect, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { Power2 } from 'gsap'
import TeamMember from '@/pages/team'
import * as TeamMember1 from '@/pages/team/Kartikey'
import * as TeamMember2 from '@/pages/team/Utkarsh'
import * as TeamMember3 from '@/pages/team/Chitransh'

function TeamScroll() {
  const sectionRef = useRef(null)
  const triggerRef = useRef(null)

  gsap.registerPlugin(ScrollTrigger)

  useEffect(() => {
    let scrollArr = gsap.utils.toArray('.scroll-team')
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
        snap: [0, 0.435, 0.56, 1],
        onEnter: function () {
          const element = document.getElementsByClassName('nav-t')
          for (let i = 0; i < element.length; i++) {
            element[i].classList.replace(
              'text-rectangle-purp',
              'text-team-green'
            )
          }
        },
        onLeaveBack() {
          const element = document.getElementsByClassName('nav-t')
          for (let i = 0; i < element.length; i++) {
            element[i].classList.replace(
              'text-team-green',
              'text-rectangle-purp'
            )
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
    <section className="overflow-hidden" id="team-scroll">
      <div ref={triggerRef}>
        <div
          ref={sectionRef}
          className="h-screen w-[460vw] flex relative bg-green-triange-pattern"
        >
          <div className="scroll-team h-screen w-screen flex justify-center items-center">
            <TeamMember />
          </div>
          <div
            ref={sectionRef}
            className="scroll-team h-screen w-screen flex justify-center items-center "
          >
            <TeamMember1.default />
          </div>
          <div
            ref={sectionRef}
            className="scroll-team  h-screen w-screen flex justify-center items-center "
          >
            <TeamMember2.default />
          </div>
          <div
            ref={sectionRef}
            className="scroll-team  h-screen w-screen flex justify-center items-center "
          >
            <TeamMember3.default />
          </div>
        </div>
      </div>
    </section>
  )
}

export default TeamScroll
