import React from "react";
import { BenifitsItem } from "./index";
import { BenifitsData } from "../../utils/constants";

const Benefits = () => {
  return (
    <section>
      <div className="mx-auto w-[86vw] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-[15px] gap-y-[18px] mt-[7.1vh] ml-[7vw] mb-[6.7vh]">
        <div className=" h-[290px] flex flex-col">
          <p className="benifits-title">
            <span className="benifits-title-span">midas360</span>
            <br />
            key benefits
          </p>
          <img
            src="/assets/benefits-train.png"
            alt="Benefits Icon"
            className="w-[255px] h-[113.42px] mt-[4.5vh]"
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
      </div>
    </section>
  );
};

export default Benefits;
