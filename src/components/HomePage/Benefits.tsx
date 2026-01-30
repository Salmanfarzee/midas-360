import React from "react";
import { BenifitsItem } from "./BenefitsItem";
import { BenifitsData } from "../../utils/constants";
import { BenifitsItemMobile } from "./BenefitsItemMobile";

const Benefits = () => {
  return (
    <section>
      <div className="mx-auto w-[86vw] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-[15px] gap-y-[18px] md:mt-[7.1vh] mt-[4.1vh] ml-[7vw] mb-[6.7vh]">
        <div className=" md:h-[290px] flex flex-col">
          <p className="benifits-title">
            <span className="benifits-title-span">midas360</span>
            <br />
            key benefits
          </p>
          <img
            src="/assets/benefits-train.png"
            alt="Benefits Icon"
            className="w-[255px] h-[113.42px] mt-[4.5vh] md:block hidden"
          />
        </div>
        {BenifitsData.map((item, index) => (
          <BenifitsItem
            key={index}
            title={item.title}
            description={item.description}
            marginTop={item.marginTop}
          />
        ))}
          {BenifitsData.map((item, index) => (
          <BenifitsItemMobile
            key={index}
            title={item.title}
            description={item.description}
            marginTop={item.marginTop}
          />
        ))}
      </div>
    </section>
  );
};

export default Benefits;
