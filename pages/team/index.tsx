import { type NextPage } from 'next'

const TeamMember: NextPage = () => {
  return (
    <>
      <section className="w-screen h-screen">
        <section className="max-w-[610px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center min-h-[200px]">
          <div className="text-5xl font-Poppins text-white team-typing-text"></div>
        </section>
      </section>
    </>
  )
}

export default TeamMember
