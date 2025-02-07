import { Linkedin } from 'lucide-react';
import { Facebook } from 'lucide-react';
import {Instagram } from 'lucide-react';
// import { Skype} from 'lucide-react';
import { Twitter } from 'lucide-react';
// import { Pinterest } from 'lucide-react';


const Footer = () => {
  return (
    
    <div className="w-full md:h-[380px] h-full bg-[#2A254B] text-white">
       <div className=" flex md:flex-row flex-col md:justify-start justify-center md:items-start items-center md:text-left text-center  ">
          <div className="md:w-[128px] md:h-[175px] w-auto h-auto lg:ml-20 md:ml-6 mt-16  ">
              <ul className="text-xs">
                  <li className="text-sm mb-4">Menu</li>
                  <li className="mb-3">New arrivals</li>
                  <li className="mb-3">Best sellers</li>
                  <li className="mb-3">Recently viewed</li>
                  <li className="mb-3">Popular this week</li>
                  <li className="mb-3">All products</li>
              </ul>      
          </div>
          <div className="w-[94px] h-[206px] lg:ml-28 md:ml-4 mt-16 ">
              <ul className="text-xs">
                  <li className="text-sm mb-4">Categories</li>
                  <li className="mb-3">Crockery</li>
                  <li className="mb-3">Furniture</li>
                  <li className="mb-3">Homeware</li>
                  <li className="mb-3">Plant pots</li>
                  <li className="mb-3">Chairs</li>
                  <li className="mb-3">Crockery</li>
              </ul>      
        </div>
          <div className="w-[125px] h-[175px] lg:ml-28 md:ml-4 mt-16 ">
              <ul className="text-xs">
                  <li className="text-sm mb-4">Our company</li>
                  <li className="mb-3">About us</li>
                  <li className="mb-3">Vacancies</li>
                  <li className="mb-3">Contact us</li>
                  <li className="mb-3">Privacy</li>
                  <li className="mb-3">Returns policy</li>
              </ul>      
          </div>
          <div className="lg:w-[627px] md:w-96 lg:h-[200px] md:mr-6 lg:ml-20 md:ml-4 mt-16 ">
              <h6 className="text-sm mb-4">Join our mailing list</h6>
            <input
              type="email"
              placeholder="your@email.com"
              className="md:w-3/4 h-[56px] lg:w-[509px] w-[224px] bg-[#4E4D93] text-white px-4 lg:px-8 "
            />
            <button className="md:w-1/4 mt-4 lg:w-[118px] w-[118px] h-[56px] bg-white text-black text-sm ">
              Sign up
              </button>
              
              </div>
              </div>
          <div className="lg:w-[1277px] md:w-8/12 w-full bg-[#4E4D93] h-[1px] lg:ml-20 md:ml-28 mt-10 "></div>
          <div className="lg:w-[1277px] md:w-8/12 w-full h-[65px] lg:ml-20 md:ml-28 flex md:flex-row flex-col md:justify-between justify-center items-center ">
              <h6 className="text-sm text-white">Copyright 2022 Avion LTD</h6>
              <div className="w-[264px] md:mt-0 mt-2 h-[24px] gap-4 flex md:justify-start justify-center md:pl-36 ">
                  <Linkedin className='w-5 h-5'/>
                  <Facebook className='w-5 h-5'/>
                  <Instagram className='w-5 h-5'/>
                  {/* <Skype /> */}
                  <Twitter className='w-5 h-5'/>
                  {/* <Pinterest/> */}
                {/* <Image src={"/Logo--linkedin.png"} alt="img" width={24} height={24} className=""></Image>      
                <Image src={"/Logo--facebook.png"} alt="img" width={24} height={24}></Image>      
                <Image src={"/Logo--instagram.png"} alt="img" width={24} height={24}></Image>      
                <Image src={"/Logo--skype.png"} alt="img" width={24} height={24}></Image>      
                <Image src={"/Logo--twitter.png"} alt="img" width={24} height={24}></Image>      
                <Image src={"/Logo--pinterest.png"} alt="img" width={24} height={24}></Image>       */}
              </div>
          </div>
    </div>
  )
}

export default Footer