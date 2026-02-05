import React from "react";
import styles from "./HowItWorks.module.scss";

const HowItWorksSec3: React.FC = () => {
  return (
    <section className={` pt-1 ${styles.HowItWorksSec3}`}>
      {/* Title and description */}
      <div className="px-[6.9vw] py-5 md:mt-12">
        <h2 className="  md:pb-3">midas360 Key Modules</h2>
        <p className="py-2 hidden md:block">
          At the core of midas360 are powerful modules that bring together data,
          intelligence, and automation, enabling metro systems to operate
          seamlessly, respond faster, and deliver safer, smarter journeys for
          passengers. 
        </p>
      </div>

      {/* Image */}
      <div className="pb-5 md:flex hidden justify-center">
        <img src="/assets/HowItWorksSec3.svg" alt="How it works" />
      </div>
      <div className=" px-[6.9vw] md:my-3">
        <h6 className="md:pb-4 pb-2">Middleware Data Integration</h6>
        <p>
          The Common Data Platform (CDP) integrates metro subsystems—signalling,
          operations, power, communications, fare, and station management—into
          one platform. Acting as middleware between OT and IT, it ensures
          seamless data exchange, real-time coordination, and improved
          network-wide operational efficiency.
        </p>
      </div>
      <div className=" px-[6.9vw] md:my-8 my-3">
        <h6 className="pb-4">Real-time Monitoring</h6>
        <p>
          Real-time monitoring enables metro operators to detect issues
          instantly, minimizing service disruptions and enhancing operational
          efficiency. By continuously tracking system performance, it ensures
          faster response times, better resource management, and a smoother
          travel experience for commuters.
        </p>
      </div>
      <div className=" px-[6.9vw] md:pb-16 pb-3">
        <h6 className="pb-4">Data-driven decision-making</h6>
        <p>
          Metro systems use integrated dashboards to visualize real-time data,
          enabling faster and smarter decisions. This data-driven approach
          enhances service quality, optimizes performance, and allows proactive
          issue resolution, contributing to efficient operations and a better
          commuter experience.
        </p>
      </div>
      <div className="pb-5 flex md:hidden justify-center">
        <img src="/assets/how-train-sec-3.svg" alt="How it works" />
      </div>
    </section>
  );
};

export default HowItWorksSec3;
