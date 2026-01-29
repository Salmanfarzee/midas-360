import React from "react";
import styles from "./HowItWorks.module.scss";

const HowItWorksSec4: React.FC = () => {
  return (
    <section className={`  ${styles.HowItWorksSec4}`}>
      {/* Title and description */}
      <div className="px-[6.9vw] py-5 mt-12">
        <h2 className="  pb-3">midas360 – KPIs </h2>
        <p className="">
          Key Performance Indicators (KPIs) help metro rail systems measure
          performance across operations, safety, customer service, finance, and
          maintenance. They ensure reliability, support informed decisions,
          drive accountability, and promote continuous improvement for
          efficient, safe, and passenger-focused metro operations. 
        </p>
      </div>

      {/* Image */}
      <div className="pb-5 flex justify-center">
        <img src="/assets/HowItWorksSec4.svg" alt="How it works" />
      </div>
    </section>
  );
};

export default HowItWorksSec4;
