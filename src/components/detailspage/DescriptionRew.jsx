

"use client"
import React, { useState } from "react";
import { descrip, review } from "../common/Helper";
import { ReviwIcon } from "../common/icons";

const DescriptionRew = () => {

  const [activeTab, setActiveTab] = useState("description"); 

  return (
    <>
      <div className="max-w-[822.46px] w-full mx-auto px-3">
        <div className="flex gap-2">
          <button
            onClick={() => setActiveTab("description")}
            className={`border font-[quicksand] rounded-tl-[5.62px] 
            rounded-tr-[5.62px] border-[#939393] cursor-pointer 
            w-[108.25px] h-[32.54px] text-[14px] font-bold 
            duration-150 
            ${activeTab === "description" ? "bg-[#D9F2F9]" : "hover:bg-[#D9F2F9]"}`}
          >
            Description
          </button>

          <button
            onClick={() => setActiveTab("reviews")}
            className={`border font-[quicksand] rounded-tl-[5.62px] 
            rounded-tr-[5.62px] border-[#939393] cursor-pointer 
            w-[108.25px] h-[32.54px] text-[14px] font-bold 
            duration-150 flex justify-center items-center
            ${activeTab === "reviews" ? "bg-[#D9F2F9]" : "hover:bg-[#D9F2F9]"}`}
          >
            Reviews<ReviwIcon/>
          </button>
        </div>

        {/*CONTENT BOX */}

        {activeTab === "description" && (
          <div className="max-w-[822.47px] w-full mx-auto px-3 rounded-bl-[5.62px] rounded-br-[5.62px] border-[0.7px] border-[#939393]">
            <h3 className="text-[#253D4E] text-[14.06px] font-bold font-[quicksand] pt-[22.7px] pl-3.5">
              Nutritional Value per 1000 ml
            </h3>

            <ul className="font-[quicksand] list-disc list-inside text-[14.06px] text-black pb-[25.27px] pl-3.5 pt-[16.5px]">
              {descrip.map((items, index) => (
                <li key={index}>{items.name}</li>
              ))}
            </ul>
          </div>
        )}

        {activeTab === "reviews" && (
          <div className="max-w-[822.47px] w-full mx-auto px-3 rounded-bl-[5.62px] rounded-br-[5.62px] border-[0.7px] border-[#939393]">
            <h3 className="text-[#253D4E] text-[14.06px] font-bold font-[quicksand] pt-[22.7px] pl-3.5">
              Indications :
            </h3>

            <ul className="font-[quicksand] list-disc list-inside text-[14.06px] text-black pb-[25.27px] pl-3.5 pt-[16.5px]">
              {review.map((items, index) => (
                <li key={index}>{items.name}</li>
              ))}
            </ul>
          </div>
        )}

      </div>
    </>
  );
};

export default DescriptionRew;
