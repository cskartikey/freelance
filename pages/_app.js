import '@/css/globals.css'
import Layout from '@/layouts/layout'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const body = document.body
    body.classList.add('wrapper')
  })
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
