import { type NextPage } from 'next'
import Typewriter from 'typewriter-effect'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

const TeamMember: NextPage = () => {

  let [ typingStatus, setTypingStatus ] = useState<boolean>(false)
  const router = useRouter()

  useEffect(() => {
    window.onscroll = () => {
      if(scrollY > window.innerHeight * 3 - 10 && typingStatus === false)
        setTypingStatus(true)
    }
    if(window.location.pathname.includes('/team'))
      router.push('/')
  }, [])

  return (
    <>
      <section className="w-screen h-screen">
        <section className="max-w-[610px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center min-h-[200px]">
          <Typewriter
            options={{
              strings: 'Some badass tagline which basically means Meet Our Team (again Typing animation.)',
              autoStart: typingStatus,
              loop: false,
              wrapperClassName: 'team-typewriter-text-index',
              cursorClassName:
                'team-typewriter-cursor-wrapper Typewriter__cursor',
            }}
          />
        </section>
      </section>
    </>
  )
}

export default TeamMember
