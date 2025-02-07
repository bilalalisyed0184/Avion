"use client";
import Link from "next/link";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="lg:w-full h-[704px] flex">
    <div className="w-full flex justify-center items-center">
      
      <div className="w-full max-w-[1280px] flex flex-col md:flex-row md:mb-0 mb-20">
      
        <div className="w-full md:w-[760px] h-auto flex flex-col justify-between bg-[#2A254B] p-6 sm:p-12 md:pt-24 md:pl-20 md:pb-20">
          <div className="w-full md:w-[513px] flex flex-col space-y-4">
            <h2 className="text-white text-[24px] leading-[36px] md:text-[32px] md:leading-[50px] md:pt-0 pt-32 md:pb-0 pb-20">
              The furniture brand for the future, with timeless designs
            </h2>
            <Link href={'/productListing'}> <button className="md:w-[170px] w-[342px] h-[56px] bg-[#4E4D93] drop-shadow-md text-white text-sm">
              View collection
            </button> </Link>
          </div>

          <p className="text-white w-full md:w-[602px] mt-6 md:mt-0 text-sm md:text-base leading-relaxed">
            A new era in eco-friendly furniture with Avelon, the French luxury
            retail brand with nice fonts, tasteful colors and a beautiful way to
            display things digitally using modern web technologies.
          </p>
        </div>

        <div className="w-full md:w-[520px] h-auto">
          <Image
            src={"/RightImage.png"}
            alt="img"
            width={520}
            height={584}
            className="w-full h-auto object-cover "
            priority
          />
        </div>
      </div>
      </div>
      </div>
  );
};

export default Hero;