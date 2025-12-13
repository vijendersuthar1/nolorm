/** @format */
"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import {
  Account,
  Arrowbar,
  Bars,
  Cart,
  Dots,
  Facebook,
  Greendots,
  Instagram,
  Notifications,
  Phonecall,
  Search,
  Twitter,
  Whatsapp,
  Xmark,
  Youtube,
} from "./icons";
const Header = () => {
  const [active, setActive] = useState(false);
  const [categories, setCategories] = useState(false);
  const [browse, setBrowse] = useState(false);
  const [sidebar, setSidebar] = useState(false);

  return (
    <>
      <div className="max-w-[1170px] w-full flex justify-between mx-auto font-[Quicksand] items-center px-3">
        <Image
          src="/images/Logo.png"
          alt="logo"
          width={122}
          height={71}
          className="cursor-pointer"
        />
        <div
          className={`flex gap-[74px] max-xl:gap-9 items-center max-lg:flex-col max-lg:absolute top-0   max-lg:backdrop-blur-[5px] max-lg:shadow-[0_12px_10px_0_#091E4226] max-lg:h-screen max-lg:justify-center max-lg:w-1/2 max-md:w-full duration-300 ${
            sidebar ? "left-0" : "left-[-150%]"
          }`}>
          <div className="flex max-md:flex-col max-lg:hidden justify-between items-center border border-[#D4EEE2] rounded-sm py-2.5 px-[13px] max-md:px-[5px] max-lg:bg-white">
            <div>
              <div
                onClick={() => setActive(!active)}
                className={`max-w-[282px] w-full flex gap-[25px] max-xl:gap-3 max-md:ga-[10px] font-bold  text-[#253D4E] text-[14px] border-r border-r-[#939393] pr-[9px] cursor-pointer max-lg:border-b max-lg:border-r-0 max-lg:border-b-[#939393]`}>
                All Categories
                <Arrowbar />
              </div>
              <div
                className={`absolute shadow-[0_3px_12px_0_rgba(9,30,66,0.15)] rounded-sm w-[100px] mt-5 text-center z-10 bg-white ${
                  active ? "block" : "hidden"
                }`}>
                <p className="hover:text-[#5e5e5e] cursor-pointer py-1">Home</p>
                <p className="hover:text-[#5e5e5e] cursor-pointer py-1">Shop</p>
                <p className="hover:text-[#5e5e5e] cursor-pointer py-1">
                  Details
                </p>
              </div>
            </div>
            <div className="pl-4 flex ">
              <input
                className="outline-none"
                type="search"
                name="search"
                id="search"
                placeholder="Search..."
              />
              <Search />
            </div>
          </div>
          <div
            onClick={() => setCategories(!categories)}
            className="flex max-lg:bg-white gap-2 shadow-[0_3px_12px_0_#091E4226] rounded-sm py-2 px-3 cursor-pointer">
            <Dots />
            <div className="max-w-[282px] w-full flex gap-[16.8px] font-bold  text-[#253D4E] text-[14px]">
              All Categories
              <Arrowbar />
            </div>
            <div
              className={`absolute shadow-[0_3px_12px_0_rgba(9,30,66,0.15)] rounded-sm w-[130px] mt-9 mx-3 text-center z-10 bg-white ${
                categories ? "block" : "hidden"
              }`}>
              <p className="hover:text-[#5e5e5e] cursor-pointer py-1">Home</p>
              <p className="hover:text-[#5e5e5e] cursor-pointer py-1">Shop</p>
              <p className="hover:text-[#5e5e5e] cursor-pointer py-1">
                Details
              </p>
            </div>
          </div>
          <div className="flex justify-between items-center gap-[15.5px] max-lg:flex-col max-lg:items-start">
            <div className="flex gap-sm items-center cursor-pointer">
              <Notifications />
              <p className="mt-3">Wishlist</p>
            </div>
            <div className="flex gap-sm items-center cursor-pointer">
              <Cart />
              <p className="mt-3">Cart</p>
            </div>
            <div className="flex gap-sm items-center mt-2 cursor-pointer">
              <Account />
              <p className="mt-1">Account</p>
            </div>
          </div>
          <div className="flex lg:hidden">
            <div className="flex max-lg:px-[5px] gap-2 items-center cursor-pointer border-r border-[#939393] pr-5">
              <Facebook />
              <Twitter />
              <Instagram />
              <Youtube />
              <Whatsapp />
            </div>
            <div className="flex items-center gap-2 pl-[17px] ">
              <Phonecall />
              <div>
                <p>(406) 555-0120</p>
                <p>Mon - Fri: 9:00-20:00</p>
              </div>
            </div>
          </div>
          <div className="flex max-sm:flex-wrap max-sm:justify-center gap-7 font-bold text-[#253D4E] text-[14px] leading-[21px] max-md:mx-auto max-md:pt-2 sm:hidden">
            <p className="hover:text-[#5e5e5e] cursor-pointer">Home</p>
            <p className="hover:text-[#5e5e5e] cursor-pointer">About</p>
            <p className="hover:text-[#5e5e5e] cursor-pointer">Shop</p>
            <p className="hover:text-[#5e5e5e] cursor-pointer">Blog</p>
            <p className="hover:text-[#5e5e5e] cursor-pointer">Our team</p>
            <p className="hover:text-[#5e5e5e] cursor-pointer">Contact</p>
          </div>
          <div
            onClick={() => setSidebar(!sidebar)}
            className="w-[35px] lg:hidden max-lg:absolute right-0 top-0 mx-3 my-4">
            <Xmark />
          </div>
        </div>
        <div
          onClick={() => setSidebar(!sidebar)}
          className="w-[35px] lg:hidden">
          <Bars />
        </div>
      </div>

      <div className="max-w-[1170px] w-full flex flex-wrap  justify-between mx-auto font-[Quicksand] items-center px-3 mt-[30px] max-md:mt-2.5">
        <div
          onClick={() => setBrowse(!browse)}
          className="flex bg-[#130017] rounded-[3px] px-[9px] py-[9px] gap-[9px] items-center max-md:mx-auto">
          <Greendots />

          <div className="max-w-[282px] w-full flex gap-[25px] font-bold text-[14px] pr-[9px] cursor-pointer text-white">
            <span>Browse</span> All Categories
            <Arrowbar />
          </div>
          <div
            className={`absolute shadow-[0_3px_12px_0_rgba(9,30,66,0.15)] rounded-sm w-60 top-[21%] max-xl:top-[23%] max-md:top-[20%] text-center z-10 bg-black ${
              browse ? "block" : "hidden"
            }`}>
            <p className="hover:text-[#5e5e5e] cursor-pointer py-1 text-white">
              Home
            </p>
            <p className="hover:text-[#5e5e5e] cursor-pointer py-1 text-white">
              Shop
            </p>
            <p className="hover:text-[#5e5e5e] cursor-pointer py-1 text-white">
              Details
            </p>
          </div>
        </div>
        <div className="flex gap-7 font-bold text-[#253D4E] text-[14px] leading-[21px] max-md:mx-auto max-md:pt-2 max-sm:hidden">
          <p className="hover:text-[#5e5e5e] cursor-pointer">Home</p>
          <p className="hover:text-[#5e5e5e] cursor-pointer">About</p>
          <p className="hover:text-[#5e5e5e] cursor-pointer">Shop</p>
          <p className="hover:text-[#5e5e5e] cursor-pointer">Blog</p>
          <p className="hover:text-[#5e5e5e] cursor-pointer">Our team</p>
          <p className="hover:text-[#5e5e5e] cursor-pointer">Contact</p>
        </div>
        <div className="flex max-xl:hidden">
          <div className="flex gap-2 items-center cursor-pointer border-r border-[#939393] pr-5">
            <Facebook />
            <Twitter />
            <Instagram />
            <Youtube />
            <Whatsapp />
          </div>
          <div className="flex items-center gap-2 pl-[17px] ">
            <Phonecall />
            <div>
              <p>(406) 555-0120</p>
              <p>Mon - Fri: 9:00-20:00</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
