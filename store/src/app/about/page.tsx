import Difference from "../Components/Difference"
import Link from "next/link"
import Image from "next/image"
import Join from "../Components/Join"

const page = () => {
    return (
        <div>
            
            <div className="lg:w-full h-[704px] flex">
    <div className="w-full flex justify-center items-center">
      
      <div className="w-full max-w-[1280px] gap-4 md:h-[478px] flex flex-col justify-center items-center md:flex-row md:mb-0 mb-20 ">
      
        <div className="w-full md:w-[630px] h-auto md:h-[478px] flex flex-col justify-between bg-[#2A254B] p-6 sm:p-12 md:pt-24 md:pl-16 md:pb-20">
          <div className="w-full md:w-[495px] flex flex-col space-y-2">
            <h2 className="text-white text-[24px] leading-[36px] md:text-[32px] md:leading-[50px] md:pt-0 pt-32 md:pb-0 pb-20">
            It started with a small idea
            </h2>
            <p className="text-white w-full md:w-[495px] mt-6 md:mt-0 text-sm md:text-base leading-relaxed">
          A global brand with local beginnings, our story begain in a small studio in South London in early 2014
            </p>
          </div>
            <Link href={'/productListing'}> <button className="md:w-[170px] w-[342px] h-[56px] bg-[#4E4D93] drop-shadow-md text-white text-sm">
              View collection
            </button> </Link>
        </div>
        

        <div className="w-full md:w-[520px] h-auto">
          <Image
            src={"/Image Block.png"}
            alt="img"
            width={630}
            height={478}
            className="w-full h-[478px] object-cover "
            priority
          />
        </div>
      </div>
      </div>
      </div>

          <div className="w-full h-auto lg:h-[603px] flex flex-col lg:flex-row">

          <div className="w-full lg:w-[720px] h-[300px] lg:h-[603px] relative">
<Image
src={"/Image222.png"}
alt="img"
layout="fill"
objectFit="cover"
className="lg:w-[720px] lg:h-[603px]"
/>
</div>
<div className="w-full lg:w-[720px] h-auto lg:h-[603px] p-6 lg:p-0">
<div className="w-full max-w-[536px] mt-10 lg:mt-20 mx-auto lg:ml-28">
<h4 className="text-[20px] sm:text-[22px] lg:text-[24px] tracking-tight leading-7">
Our service isn’t just personal, it’s actually
hyper personally exquisite
</h4>
<p className="pt-4 text-sm sm:text-base">
When we started Avion, the idea was simple. Make high quality furniture affordable and available for the mass market.
</p>
<p className="pt-4 text-sm sm:text-base">
Handmade, and lovingly crafted furniture and homeware is what we live, breathe and design so our Chelsea boutique become the hotbed for the London interior design community.
</p>
</div>
<Link href={'./about'}><div className="flex justify-center lg:justify-start lg:ml-28 mt-8 lg:mt-48">
<button className="w-[150px] h-[56px] bg-[#F9F9F9] text-sm">
  Get in touch
</button>
</div></Link>
</div>
</div>
          <Difference />
          <Join/>
    </div>
  )
}

export default page