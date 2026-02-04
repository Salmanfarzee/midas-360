import React, { useContext, useState } from "react";
import { caseStudies } from "../../utils/constants";
import { useDevice } from "../Context/AppContext";
import styles from "./InsightsDetail.module.scss";

const InsightsDetailBanner = () => {
  const { isMobile } = useDevice();

  return (
    <section
      className={` ${styles.caseDetailBanner} relative w-full  flex justify-center items-start`}
    >
      {/* Base Layer: Text + Action Icons */}
      <div className={`w-full ${styles.caseStudyBannerHeight}  relative md:mt-[110px] mt-[75px]  bg-[#209CD8]/20 transition-colors duration-300 z-0 flex justify-between`}>
        <div className="flex flex-col items-start content-start w-[40vw]">
          <h2
            className={`${styles.caseStudyTitle} ml-[7.2vw] md:mt-[5.8vh] mt-[2.5vh]`}
          >
            Saving $1.2M in Transport by Enhancing Asset Availability
          </h2>
          <h6 className={`${styles.caseStudySubtitle} ml-[7.2vw] mt-[4.5vh]`}>
            How BCT transformed the operations of 79 trains and 1442 buses on
            107 routes, carrying nearly 7 million riders on 179,000 trips
          </h6>
          {/* <p className={`${styles.caseStudyAuthor} ml-[7.2vw] mt-[1vh]`}>
            Julian Arul Harrish | August 25, 2025
          </p> */}
        </div>
        <div
          className={`${styles.caseSudyImage} absolute top-[90px] right-[7.2vw]`}
        >
          <img
            src={
              isMobile
                ? "/assets/casestudy-inner1.svg"
                : "/assets/casestudy-inner1.svg"
            }
            alt="case study banner"
            className=" h-full w-full "
          />
        </div>
      </div>
    </section>
  );
};

export default InsightsDetailBanner;
