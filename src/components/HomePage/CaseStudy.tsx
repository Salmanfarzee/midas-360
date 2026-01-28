import React, { useState } from "react";
import { caseStudies } from "../../utils/constants";

const CaseStudy = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);

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
        prev === 0 ? caseStudies.length - 1 : prev - 1
      );
      setFade(true);
    }, 300);
  };

  return (
    <section className="relative w-full h-[670px] flex justify-center items-start">
      {/* Base Layer: Text + Action Icons */}
      <div className="w-full h-[344px] bg-case-study-overlay transition-colors duration-300 z-0 flex justify-between">
        <p className="case-study-title ml-[7.2vw] mt-[5.8vh]">Case study</p>
        <div className="flex mr-[8vw] mt-[7.5vh]">
          <img
            src="/assets/carousel-left-arrow.png"
            alt="Left Arrow"
            className="w-[30px] h-[30px] mr-[10px] cursor-pointer"
            onClick={handlePrev}
          />
          <img
            src="/assets/carousel-right-arrow.png"
            alt="Right Arrow"
            className="w-[30px] h-[30px] cursor-pointer"
            onClick={handleNext}
          />
        </div>
      </div>

      {/* Overlay Layer: Carousel Images */}
      <div
        className={`absolute mt-[115px] w-[86vw] h-[528px] z-10 bg-cover bg-center rounded-[10px] flex flex-col 
          transition-opacity duration-300 ease-in-out ${fade ? "opacity-100" : "opacity-0"}`}
        style={{
          backgroundImage: `url(${current.bgImage})`,
        }}
      >
        <p
          className="case-study-subtitle mt-[23vh] ml-[3.8vw] mb-[20px] w-[34.8vw]"
          dangerouslySetInnerHTML={{ __html: current.title }}
        />
        <p
          className="case-study-content ml-[3.8vw] w-[51.6vw]"
          dangerouslySetInnerHTML={{ __html: current.content }}
        />
        <div className="flex ml-[4.4vw] mt-[6.4vh]">
          <img
            src="/assets/arrow-right-white.png"
            alt="Arrow Right"
            className="w-[8px] h-[16px]"
          />
          <a
            href={current.actionUrl}
            className="case-study-action-span cursor-pointer ml-[14px] hover:underline"
          >
            View case study
          </a>
        </div>
      </div>
    </section>
  );
};

export default CaseStudy;