import React from "react";
import {
  Facebook,
  Instagram,
  Mobile,
  Twitter,
  Whatsapp,
  Youtube,
} from "./icons";
import { FooterLink, logodata, productTags } from "./Helper";
import PageBanner from "./PageBanner";
import Link from "next/link";


const Footer = () => {
  return (
    <div className="max-w-[1170px] w-full mx-auto px-4 flex mt-[127px] gap-[87px] max-lg:flex-col max-lg:mt-[30px] max-lg:gap-10">
      <div className="max-w-[262px] w-full">
        <h2 className="text-[42px] font-semibold text-[#000000] font-[quicksand]">
          Logo
        </h2>
        <div className="flex gap-2 pt-[38px] cursor-pointer">
          <Facebook/>
          <Twitter />
          <Instagram />
          <Youtube />
          <Whatsapp />
        </div>
        <div className="pt-[30.5px]">
          {logodata.map((items, index) => (
            <div key={index} className="flex gap-2.5 font-[lato] pt-[25px] ">
              {items.img}
              <p className="text-[14px] text-[#253D4E] font-normal ">
                {items.p}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div>
        <div className="grid grid-cols-3 gap-[126px] max-md:grid-cols-2 max-sm:grid-cols-1  max-md:gap-[50px] cursor-pointer  ">
          {FooterLink.map((items, index) => (
            <div className="flex flex-col gap-2">
              <h3 className="text-[18px] text-[#253D4E] font-[poppins] font-semibold">{items.heading}</h3>
              <ul className="text-[14px] text-[#253D4E] font-[open_Sans] font-normal leading-[21px] gap-2.5 flex flex-col   ">
               {items.links.map((link,i)=>{
                return(
                  <li className="hover:text-blue-500 ">{link.title}</li>
                )
               })}
              </ul>
            </div>
          ))}
        </div>
        <div className="pt-10">
          <h2 className="text-[18px] text-[#130017] font-[quicksand] font-semibold ">Product tags</h2>
          <div className="flex gap-4 flex-wrap pt-3">
            {productTags.map((tag,index)=>(
              <button key={index} className="text-[12px] text-[#253D4E] font-[quicksand] font-semibold bg-[#F2F0F0] rounded-xl py-1 px-[9.47px]">{tag}</button>
            ))}
            
          </div>









          <div className="flex justify-between items-center mt-[9px] border-t border-t-[#939393] max-md:flex-col max-md max-md:justify-center">
            <p className="text-[14px] text-[#253D4E] font-[lato] max-md:pt-5 ">Copyright © 2022 <span className="text-[#130017]">ThemeRage</span>. All Right Reserved.</p>
            <div className="flex gap-6 h-28 items-center  ">
             <div className="flex gap-2.5 ">
               <Mobile/>
              <p className="text-[14px] text-[#253D4E]">(684) 555-0102</p>
             </div>
             <div className="flex gap-2.5">
               <Mobile/>
              <p className="text-[14px] text-[#253D4E]">(684) 555-0102</p>
             </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
