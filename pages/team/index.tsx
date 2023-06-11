import { type NextPage } from 'next'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
const TeamMember: NextPage = () => {
  const router = useRouter()
  useEffect(() => {
    if (window.location.pathname.includes('/team')) router.push('/')
  }, [])
  return (
    <>
      <section className="h-screen w-screen">
        <section className="absolute left-1/2 top-1/2 min-h-[200px] max-w-[610px] -translate-x-1/2 -translate-y-1/2 text-center">
          <div className="team-typing-text font-Poppins text-5xl text-white"></div>
        </section>
      </section>
    </>
  )
}

export default TeamMember
