import React from "react";
import styles from "./HowItWorks.module.scss";

const HowItWorksSec2: React.FC = () => {
  return (
    <section className={`  ${styles.HowItWorksSec2}`}>
      {/* Title and description */}
      <div className="px-[6.9vw] py-5 mt-12">
        <h2 className="  pb-3">
          The Intelligent Nerve Center of Urban Metro Rails 
        </h2>
        <p className="">
          midas360 connects every part of the rail ecosystem, from trains and
          tracks to stations and control centers, into one intelligent platform.
          By turning real-time data into actionable insights, it helps operators
          enhance safety, optimize maintenance, and deliver smarter, more
          reliable services for passengers. 
        </p>
      </div>

      {/* Image */}
      <div className="pb-5 flex justify-center">
        <img src="/assets/HowItWorksSec2.svg" alt="How it works" />
      </div>
    </section>
  );
};

export default HowItWorksSec2;
