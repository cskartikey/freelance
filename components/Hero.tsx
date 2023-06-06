import Image from "next/image";
import image from "assets/svg/Image.svg";
import Head from "next/head";

export default function Hero() {
  return(
    <main className="flex text-5xl items-center h-screen justify-center">
    <Head>
      <title>Freelance</title>
    </Head>
    <section>
      <div className="pr-40 mr-96 mb-36">
        <div className="absolute inset-0 flex justify-center items-center z-10">
          <Image src={image} alt="" />
        </div>
        <div className="flex flex-col border-nav-blue space-y-4 border-l h-full pl-5 ">
          <span className="font-Hurricane text-white text-8xl z-20">
            Designing
          </span>
          <span className="font-Poppins text-white z-20">and</span>
          <span className="font-Space-Mono text-white z-20">
            <span className="opacity-50">&lt;</span>developing
            <span className="opacity-50">/&gt;</span>
          </span>
          <span className="font-Poppins text-white z-20">
            websites for <span className="text-nav-blue">business</span>
          </span>
        </div>
      </div>
    </section>
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[65vw] h-[85vh] max-w-[1000px] max-h-[600px]">
      <div className="shape-l absolute rounded-md border-nav-blue border-solid border-2 opacity-50 w-3/6 h-80 top-0 mt-4 left-0 ml-10 z-0"></div>
      <div className="shape-r absolute rounded-md border-nav-blue border-solid border-2 opacity-50 w-5/6 h-5/6 bottom-0 right-0 z-0"></div>
      <div className="shape-r-2 absolute rounded-md border-nav-blue border-solid border-2 opacity-50 w-3/6 h-3/6 -bottom-6 -right-8 z-0"></div>
    </div>
  </main>
  );
}