import Image from "next/image"
import image from "assets/svg/Image.svg"
export default function Index() {
  return (
    <main className="flex text-5xl items-center h-screen justify-center">
      <div className="pr-96 mr-96 mb-36">

        <div className="absolute overflow-hidden inset-0 flex justify-center items-center z-0">
        <Image src={image} alt="" />
        </div>
      <div className= "flex flex-col space-y-4 border-l h-full border-nav-blue pl-5 ">
          <span className="font-Hurricane text-white text-8xl z-10">Designing</span>
          <span className="font-Poppins text-white z-10">and</span>
          <span className="font-Space-Mono text-white z-10">
            <span className="opacity-50">&lt;</span>developing<span className="opacity-50">/&gt;</span>
          </span>
          <span className="font-Poppins text-white z-10">
            websites for <span className="text-nav-blue">business</span>
          </span>
        </div>
      </div>

    </main>
  );
}
