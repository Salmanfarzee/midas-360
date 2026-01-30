import React, { useContext, useState } from "react";
import { caseStudies } from "../../utils/constants";
import App from "../../App";
import { useDevice } from "../Context/AppContext";

const CaseStudy = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);
const { isMobile } = useDevice();
  const current = caseStudies[currentIndex];

  const handleNext = () => {
    setFade(false);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % caseStudies.length);
      setFade(true);
    }, 300); // duration matches CSS transition
  };

  const handlePrev = () => {
    setFade(false);
    setTimeout(() => {
      setCurrentIndex((prev) =>
        prev === 0 ? caseStudies.length - 1 : prev - 1,
      );
      setFade(true);
    }, 300);
  };

  return (
    <section className="relative w-full md:h-[670px] h-[170px] flex justify-center items-start">
      {/* Base Layer: Text + Action Icons */}
      <div className="w-full md:h-[344px] h-[82px] bg-case-study-overlay transition-colors duration-300 z-0 flex justify-between">
        <p className="case-study-title ml-[7.2vw] md:mt-[5.8vh] mt-[2.5vh]">
          Case study
        </p>
        <div className="flex mr-[8vw] md:mt-[7.5vh] mt-[2.5vh]">
          <img
            src="/assets/carousel-left-arrow.png"
            alt="Left Arrow"
            className="w-[30px] h-[30px] mr-[10px] cursor-pointer md:block hidden"
            onClick={handlePrev}
          />
          <img
            src="/assets/carousel-right-arrow.png"
            alt="Right Arrow"
            className="w-[30px] h-[30px] cursor-pointer md:block hidden"
            onClick={handleNext}
          />
          {/* mobile */}
          <img
            src="/assets/left-arrow-mobile.svg"
            alt="Left Arrow"
            className="w-[20px] h-[20px] mr-[10px] cursor-pointer md:hidden block"
            onClick={handlePrev}
          />
          <img
            src="/assets/right-arrow-mobile.svg"
            alt="Right Arrow"
            className="w-[20px] h-[20px] cursor-pointer md:hidden block"
            onClick={handleNext}
          />
        </div>
      </div>

      {/* Overlay Layer: Carousel Images */}
      <div
        className={`absolute md:mt-[115px] mt-[50px] w-[88vw] md:h-[528px] h-[138px] z-10 bg-cover bg-center rounded-[10px] flex flex-col 
          transition-opacity duration-300 ease-in-out ${fade ? "opacity-100" : "opacity-0"}`}
        style={{
          backgroundImage: `url(${isMobile ? current.bgImageMobile : current.bgImage})`,
        }}
      >
        <p
          className="case-study-subtitle md:mt-[23vh] mt-[60px] ml-[3.8vw] md:mb-[20px] w-[34.8vw]"
          dangerouslySetInnerHTML={{ __html: current.title }}
        />
        <p
          className="case-study-content ml-[3.8vw] w-[51.6vw] md:block hidden"
          dangerouslySetInnerHTML={{ __html: current.content }}
        />
        <div className="flex ml-[4.4vw] md:mt-[6.4vh] mt-[10px]">
          <img
            src="/assets/arrow-right-white.png"
            alt="Arrow Right"
            className="md:w-[8px] md:h-[16px] w-[4px] h-[8px]"
          />
          <a
            href={current.actionUrl}
            className="case-study-action-span cursor-pointer md:ml-[14px] ml-[8px] hover:underline"
          >
            View case study
          </a>
        </div>
      </div>
    </section>
  );
};

export default CaseStudy;
