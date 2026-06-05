/** @format */

import Newsletter from "@/components/about/Newsletter";
import PageBanner from "@/components/common/PageBanner";
import Hero from "@/components/home/Hero";
import React from "react";

const page = () => {
  return (
    <div>
      <PageBanner title="Contact Us" />
      <Hero />
      <Newsletter />
    </div>
  );
};

export default page;
