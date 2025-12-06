import React from "react";
import { Facebook, Instagram, Mobile, Twitter, Whatsapp, Youtube } from "./icons";
import { logodata } from "./Helper";

const Footer = () => {
  return (
    <div className="max-w-[1170px] w-full mx-auto px-4 flex mt-[127px]">
      <div>
        <h2 className="text-[42px] font-semibold text-[#000000] font-[quicksand]">
          Logo
        </h2>
        <div className="flex gap-2 pt-[38px]">
          <Facebook/>
          <Twitter/>
          <Instagram/>
          <Youtube/>
          <Whatsapp/>
        </div>
        <div>
          {logodata.map((items,index)=>(
             <div key={index} className="flex gap-2.5 font-[lato] ">
            {items.img}
            <p className="text-[14px] text-[#253D4E] font-normal ">{items.p}</p>
          </div>
          ))}
         
        </div>
        
      </div>
      
    </div>
  );
};

export default Footer;
