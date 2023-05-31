import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Nav() {
  const router = useRouter();
  const [navColor, setNavColor] = useState("text-nav-blue");

  useEffect(() => {
    if (router.pathname === "/about") {
      setNavColor("text-rectangle-purp");
    }
  }, [router.pathname]);

  return (
    <nav className={`flex justify-between pt-6 px-12 ${navColor}`}>
      <div>
        <p className="font-Mansalva text-white text-3xl cursor-pointer">
          <span className={`font-Space-Grotesk ${navColor}`}>&lt;</span>
          Freelance
          <span className={`font-Space-Grotesk ${navColor}`}>/&gt;</span>
        </p>
      </div>
      <div className="space-x-8 pt-4">
        <Link href="/" className={`font-Space-Grotesk-Bold text-white font-bold text-sm ${router.pathname === "/" ? "opacity-100" : "opacity-33 hover:opacity-66"}`}>
            HOME
        </Link>
        <Link href="/about" className={`font-Space-Grotesk-Bold text-white font-bold text-sm ${router.pathname === "/about" ? "opacity-100" : "opacity-33 hover:opacity-66"}`}>
            ABOUT
        </Link>
        <Link href="/team" className={`font-Space-Grotesk-Bold text-white font-bold text-sm ${router.pathname === "/team" ? "opacity-100" : "opacity-33 hover:opacity-66"}`}>
            TEAM
        </Link>
        <Link href="/contact" className={`font-Space-Grotesk-Bold text-white font-bold text-sm ${router.pathname === "/contact" ? "opacity-100" : "opacity-33 hover:opacity-66"}`}>
            CONTACT
        </Link>
      </div>
    </nav>
  );
}
