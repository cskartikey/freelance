import '@/css/globals.css'
import Layout from '@/layouts/layout'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
function MyApp({ Component, pageProps }) {
  const router = useRouter()
  const [backgroundImage, setBackgroundImage] = useState(
    'bg-blue-triange-pattern'
  )
  useEffect(() => {
    if (router.pathname === '/') {
      setBackgroundImage('bg-blue-triange-pattern')
    } else if (router.pathname.includes('/about')) {
      setBackgroundImage('bg-purp-rectangle-pattern')
    } else if (router.pathname.includes('/team')) {
      setBackgroundImage('bg-green-triange-pattern')
    } else if (router.pathname.includes('/contact')) {
      setBackgroundImage('bg-red-rectangle-pattern')
    }
  }, [router.pathname])
  useEffect(() => {
    const body = document.body
    body.classList.forEach((item) => {
      body.classList.remove(item)
    })
    body.classList.add(backgroundImage)
  }, [backgroundImage])
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
