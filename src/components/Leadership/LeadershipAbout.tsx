import styles from "./Leadership.module.scss";

const LeadershipAbout = () => {
  return (
    <section className="grid md:grid-cols-[60%_40%] grid-cols-1 md:my-12 my-4">
      {/* Content on the left */}
      <div className="ml-[6.9vw]">
        <div className="flex items-start md:items-start flex-col mt-[2.7vh]">
          {/* Desktop Title */}
          <p className={`${styles.traintitle} md:block hidden`}>
            About midas360
          </p>

          {/* Desktop Content */}
          <p className={`${styles.traincondent} mt-[26px] md:block hidden`}>
            midas360 (Metrorail Intelligent Decision Analytics System) is an
            <br />
            advanced AI-powered analytics platform designed to optimize metro
            <br />
            rail operations and maintenance. Built to support the complex
            <br />
            demands of modern metro rail networks, midas360 leverages real-time
            <br />
            data, machine learning, and predictive intelligence to transform how
            <br />
            rail systems are managed—from infrastructure monitoring to asset
            <br />
            performance and service reliability.
          </p>
          <p className={`${styles.traincondent} mt-[40px] md:block hidden`}>
            At its core, midas360 integrates data from various sources internal
            <br />
            systems, IoT sensors, and third-party platforms to deliver
            actionable <br />
            insights that empower operators to make informed .
          </p>

          {/* Mobile Title */}
          <p className={`${styles.traintitle}   md:hidden`}>
            About midas360{" "}
          </p>

          {/* Mobile Content */}
          <p
            className={`${styles.traincondent} mt-[12px] block md:hidden `}
          >
            midas360 (Metrorail Intelligent Decision Analytics System) is an
            advanced <br />
            AI-powered analytics platform designed to optimize metro rail
            operations
            <br /> and maintenance. Built to support the complex demands of
            modern metro
            <br /> rail networks, midas360 leverages real-time data, machine
            learning, and
            <br /> predictive intelligence to transform how rail systems are
            managed—from
            <br /> infrastructure monitoring to asset performance and service
            reliability.
          </p>
          <p
            className={`${styles.traincondent} mt-[20px] block md:hidden  pb-4`}
          >
            At its core, midas360 integrates data from various sources internal
            <br />
            systems, IoT sensors, and third-party platforms to deliver
            actionable
            <br /> insights that empower operators to make informed .
          </p>
        </div>
      </div>

      {/* Image on the right */}
      <div className="md:flex hidden justify-center mr-[6.9vw]">
        <img
          src="/assets/train-leadership-right.svg"
          alt="Metro Rails Icon"
          className="h-[372px] mt-[5.6vh] mb-[5.4vh] "
        />
      </div>
    </section>
  );
};

export default LeadershipAbout;
