import { useRouter } from "next/router";
import { useState, useEffect } from "react";

export default function Footer(){
    const router = useRouter();
    const [footer, setFotColor] = useState("border-nav-blue");
    const [footerNumber, setnFotColor] = useState("bg-scroll-blue");
    useEffect(() => {
      if (router.pathname === "/") {
        setFotColor("border-nav-blue");
        setnFotColor("bg-scroll-blue");
      }
      else if (router.pathname.includes("/about")) {
        setFotColor("border-rectangle-purp");
        setnFotColor("bg-footer-number-red");
      }
      else if (router.pathname.includes("/team")) {
        setFotColor("border-team-green");
        setnFotColor("bg-footer-number-green");
      }
      else if (router.pathname.includes("/contact")) {
        setFotColor("border-contact-red");
        setnFotColor("bg-footer-number-ured");
      }
    }, [router.pathname]);
    return (
        <footer className="fixed bottom-16 w-full flex justify-start pl-8">
            <div>
                <p className="text-white opacity-[.35] font-Space-Mono">freelance.kodec.tech</p>
            </div>
            <div className={`flex space-x-4 border-2 border-solid ${footer} opacity-50 ml-36 font-Space-Mono`}>
                    <div className={`${footerNumber} text-black opacity-90`}>
                        1
                    </div>
                    <div>
                        2
                    </div>
                    <div>
                        3
                    </div>
                    <div>
                        4
                    </div>
            </div>
        </footer>
    )
}