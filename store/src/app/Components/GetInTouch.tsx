import Image from "next/image";
import Link from "next/link";

const GetInTouch = () => {
  return (
    <div className="w-full h-auto lg:h-[603px] flex flex-col lg:flex-row">

          <div className="w-full lg:w-[720px] h-auto lg:h-[603px] p-6 lg:p-0">
        <div className="w-full max-w-[536px] mt-10 lg:mt-20 mx-auto lg:ml-28">
          <h4 className="text-[20px] sm:text-[22px] lg:text-[24px] tracking-tight leading-7">
            From a studio in London to a global brand with over 400 outlets
          </h4>
          <p className="pt-4 text-sm sm:text-base">
            When we started Avion, the idea was simple. Make high quality
            furniture affordable and available for the mass market.
          </p>
          <p className="pt-4 text-sm sm:text-base">
            Handmade, and lovingly crafted furniture and homeware is what we
            live, breathe and design so our Chelsea boutique became the hotbed
            for the London interior design community.
          </p>
        </div>
        <Link href={'./about'}><div className="flex justify-center lg:justify-start lg:ml-28 mt-8 lg:mt-48">
          <button className="w-[150px] h-[56px] bg-[#F9F9F9] text-sm">
            Get in touch
          </button>
        </div></Link>
      </div>

      <div className="w-full lg:w-[720px] h-[300px] lg:h-[603px] relative">
        <Image
          src={"/Image4.png"}
          alt="img"
          layout="fill"
          objectFit="cover"
          className="lg:w-[720px] lg:h-[603px]"
        />
      </div>
    </div>
  );
};

export default GetInTouch;