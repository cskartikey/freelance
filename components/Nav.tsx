import { useRouter } from "next/router";
import { useState, useEffect } from "react";

export default function Nav() {
  const router = useRouter();
  const [navColor, setColor] = useState("text-nav-blue");
  useEffect(() => { 
    if(router.pathname === "/about"){
      setColor("text-rectangle-purp"); 
    }
  }, [router.pathname]);
  return (
    <nav className={`flex justify-between pt-6 px-12 ${navColor}`}>
      <div>
        <p className="font-Mansalva text-white text-3xl cursor-pointer">
          <span className={`font-Space-Grotesk ${navColor}`}>&lt;</span>Freelance
          <span className={`font-Space-Grotesk ${navColor}`}>/&gt;</span>
        </p>
      </div>
      <div className="space-x-8 pt-4">
        <span className="font-Space-Grotesk-Bold text-white font-bold text-sm cursor-pointer">
          HOME
        </span>
        <span className="font-Space-Grotesk-Bold text-white font-bold text-sm opacity-33 hover:opacity-66 cursor-pointer">
          ABOUT
        </span>
        <span className="font-Space-Grotesk-Bold text-white font-bold text-sm opacity-33 hover:opacity-66 cursor-pointer">
          TEAM
        </span>
        <span className="font-Space-Grotesk-Bold text-white font-bold text-sm opacity-33 hover:opacity-66 cursor-pointer">
          CONTACT
        </span>
      </div>
    </nav>
  );
}
