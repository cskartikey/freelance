import '@/css/globals.css'
import Layout from '@/layouts/layout';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [backgroundImage, setBackgroundImage] = useState("bg-blue-triange-pattern");
  useEffect(() => { 
    if(router.pathname === "/"){
      setBackgroundImage("bg-blue-triange-pattern"); 
    }
    else if(router.pathname.includes("/about")){
      setBackgroundImage("bg-purp-triange-pattern"); 
    }
  }, [router.pathname]);
  useEffect(() => {
    document.body.classList.add(backgroundImage);
  });
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
    
  );
}

export default MyApp;
