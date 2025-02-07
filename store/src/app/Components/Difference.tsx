"use client";

import Image from "next/image";

const Difference = () => {
  return (
    <div className="w-full max-w-[1440px] h-[355px] mx-auto md:mb-0 mb-60">
      <h3 className="md:text-[24px] text-xl md:text-center md:w-auto w-[274px] pt-10">What makes our brand different</h3>

      <div className="w-full h-4/6 flex md:justify-evenly md:gap-0 gap-10 items-center md:mt-0 mt-10 flex-wrap sm:flex-nowrap">

        <div className="w-[270px] h-[124px]">
          <Image src={'/delivery.png'} alt="img" width={24} height={24} />
          <h4 className="text-[20px] mt-4 mb-4">Next day as standard</h4>
          <p className="text-sm tracking-tight">Order before 3pm and get your order the next day as standard</p>
        </div>

        <div className="w-[270px] h-[124px]">
          <Image src={'/Checkmark--outline.png'} alt="img" width={24} height={24} />
          <h4 className="text-[20px] mt-4 mb-4">Made by true artisans</h4>
          <p className="text-sm tracking-tight">Handmade crafted goods made with real passion and craftsmanship</p>
        </div>

        <div className="w-[270px] h-[124px]">
          <Image src={'/purchase.png'} alt="img" width={24} height={24} />
          <h4 className="text-[20px] mt-4 mb-4">Unbeatable prices</h4>
          <p className="text-sm tracking-tight">For our materials and quality you won’t find better prices anywhere</p>
        </div>

        <div className="w-[270px] h-[124px]">
          <Image src={'/sprout.png'} alt="img" width={24} height={24} />
          <h4 className="text-[20px] mt-4 mb-4">Recycled packaging</h4>
          <p className="text-sm tracking-tight">We use 100% recycled packaging to ensure our footprint is manageable</p>
        </div>
      </div>
    </div>
  );
};

export default Difference;