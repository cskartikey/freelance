import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Power2 } from "gsap";
import ContactUS from "@/pages/contact";
import Contact from "@/pages/contact/2";
function ContactScroll() {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    let scrollArr = gsap.utils.toArray('.scroll-contact')
    console.log(scrollArr)
    let to = gsap.to(scrollArr, {
      xPercent: () => -100 * (scrollArr.length - 1),
      ease: Power2.easeInOut,
      scrollTrigger: {
        start: 'top top',
        trigger: sectionRef.current,
        markers: true,
        pin: true,
        pinSpacing: true,
        scrub: 0.8,
        invalidateOnRefresh: true,
        anticipatePin: 1,
        snap: 0.5 / (scrollArr.length - 1),
        toggleClass: {className: 'main-tool-bar--scrolled', targets: '.main-tool-bar'},
        end: () => '+=' + window.innerWidth,
      },
      
    });
    console.log(sectionRef.current)
    return () => {
      to.kill();
    };
  }, []);

  return (
    <section className="overflow-hidden">
      <div ref={triggerRef}>
        <div ref={sectionRef} className="h-screen w-[350vw] flex relative bg-red-rectangle-pattern">
          <div className="scroll-contact h-screen w-screen flex justify-center items-center">
            <ContactUS />
          </div>
          <div ref={sectionRef}  className="scroll-contact h-screen w-screen flex justify-center items-center ">
            <Contact />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactScroll;