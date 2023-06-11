import Hero from '@/components/Hero'
import AboutScroll from '@/components/AboutScroll'
import TeamScroll from '@/components/TeamScroll'
import ContactScroll from '@/components/ContactScroll'
import Nav from '@/components/Nav'
import { useEffect } from 'react'

export default function Index() {

  return (
    <>
      <Nav />
      <Hero />
      <AboutScroll />
      <TeamScroll />
      <ContactScroll />
    </>
  )
}
