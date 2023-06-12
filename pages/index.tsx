import Hero from '@/components/Hero'
import AboutScroll from '@/components/AboutScroll'
import TeamScroll from '@/components/TeamScroll'
import ContactScroll from '@/components/ContactScroll'
import { useEffect } from 'react'

export default function Index() {
  return (
    <>
      <Hero />
      <AboutScroll />
      <TeamScroll />
      <ContactScroll />
    </>
  )
}
