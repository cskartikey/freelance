export default function Nav(){
    return (
        <nav className='flex justify-between pt-6 px-12'>
        <div> 
          <p className='font-Mansalva text-white text-3xl cursor-pointer'><span className='font-Space-Grotesk text-nav-blue'>&lt;</span>Freelance<span className='font-Space-Grotesk text-nav-blue'>/&gt;</span></p>
        </div>
        <div className='space-x-8 pt-4'>
          <span className='font-Space-Grotesk-Bold text-white font-bold text-sm cursor-pointer'>HOME</span>
          <span className='font-Space-Grotesk-Bold text-white font-bold text-sm opacity-33 hover:opacity-66 cursor-pointer' >ABOUT</span>
          <span className='font-Space-Grotesk-Bold text-white font-bold text-sm opacity-33 hover:opacity-66 cursor-pointer'>CONTACT</span>
        </div>
      </nav>
    )
}