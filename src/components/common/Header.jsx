/** @format */

import Link from "next/link";
import React from "react";
import { FooterLink } from "./Helper";

const Header = () => {
  return (
    <div className="max-w-[1170px] w-full flex justify-between mx-auto font-[Quicksand]">
      <Link href="#" className="font-semiBold text-[42px] leading-[63px]">
        Logo
      </Link>
      
    </div>
  );
};

export default Header;
