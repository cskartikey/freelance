import Hero from '@/components/Hero'
import AboutScroll from '@/components/AboutScroll'
import TeamScroll from '@/components/TeamScroll'
import ContactScroll from '@/components/ContactScroll'
import Nav from '@/components/Nav'
import Head from 'next/head'

export default function Index() {
  return (
    <>
      <Nav />
      <Hero />
      <AboutScroll />
      <TeamScroll />
      <ContactScroll />
      <Head>
        <title>Freelance</title>
      </Head>
    </>
  )
}
