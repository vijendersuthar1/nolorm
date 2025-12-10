import React from "react";

const OnlineStore = () => {
  return (
    <div className="max-w-[1170px] w-full mx-auto px-4 pt-[100px] max-sm:pt-[50px]">
      <h2 className="text-[42px] font-[quicksand] font-semibold mx-auto max-w-[502px] text-center w-full max-sm:text-[35px]">
        <span className="text-[#253D4E] ">Online Store of</span> Products With
        Delivery
      </h2>
      <div className="pt-[41px]">
        <ul className="flex flex-col gap-3 text-[#253D4E] font-[lato] leading-[19px]">
          <li>
            <span className="text-[#130017]"> Lorem ipsum</span> Lorem ipsum
            dolor sit amet consectetur, adipisicing elit. Iste sed iure ipsum,
            cumque enim veritatis placeat rerum quas, obcaecati nemo sit
            consectetur voluptate. Aspernatur id soluta voluptate iusto quae
            impedit.
          </li>
          <li>
            orem ipsum dolor sit amet consectetur, adipisicing elit. Iste sed
            iure ipsum, cumque enim veritatis placeat rerum quas, obcaecati nemo
            sit consectetur voluptate. Aspernatur id soluta voluptate iusto quae
            impedit.
          </li>
        </ul>
      </div>
      <div className="pt-10">
        <h3 className="text-[20px] font-bold font-[quicksand] text-[#253D4E]">
          Assortment
        </h3>
        <p className="font-[lato] text-[#253D4E] pt-5">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste sed
          iure ipsum, cumque enim veritatis placeat rerum quas, obcaecati nemo
          sit consectetur voluptate. Aspernatur id soluta voluptate iusto quae
          impedit.
        </p>
        <ul className="text-[14px] text-[#253D4E] font-[lato] flex flex-col gap-2 list-disc pl-3 pt-3">
          <li>Vaps</li>
          <li>Tanks</li>
          <li>Dried Vaping</li>
          <li>Drinks</li>
          <li>Drinks</li>
          <li>Vapings</li>
        </ul>
        <div>
          <ul className="flex flex-col gap-3 leading-[19px] max-sm:gap-4 max-sm:leading-[25px] font-[lato] text-[#253D4E] pt-3">
            <li>
              Another highlight of is the opportunity to buy exotic Vaping. Our
              assortment includes more than 500 exotic Vaping from different
              parts of the world. It is difficult to buy them in a regular
              supermarket. However, using our delivery, you can easily feel the
              exotic taste.
            </li>
            <li>
              Looking for an original gift for a loved one, friend or colleague?
              In our online grocery store you can order Box - a set of exotic
              Vaping in a beautiful craft box. Such a gift will be remembered
              for a long time and will cause pleasant emotions and impressions
              of new tastes. In addition, you can assemble and buy such a set
              yourself by choosing any Vaping, berries or nuts from the
              assortment.
            </li>
            <li>
              The high quality of our products is confirmed by relevant
              certificates and the international HACCP certificate. We make sure
              that customers receive only selected natural products, ready to
              use. They are stored in our own warehouses where the correct
              temperature is maintained to keep them fresh and ripe.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default OnlineStore;
