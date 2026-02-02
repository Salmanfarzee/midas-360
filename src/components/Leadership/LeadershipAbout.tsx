import styles from "./Leadership.module.scss";

const LeadershipAbout = () => {
  return (
    <section className="grid md:grid-cols-2 grid-cols-1 my-12">
      {/* Content on the left */}
      <div className="ml-[6.9vw]">
        <div className="flex items-center md:items-start flex-col mt-[2.7vh]">
          {/* Desktop Title */}
          <p className={`${styles.traintitle} md:block hidden`}>
            About midas360
          </p>

          {/* Desktop Content */}
          <p className={`${styles.traincondent} mt-[26px] md:block hidden`}>
            midas360 (Metrorail Intelligent Decision Analytics System) is an
            advanced AI-powered analytics platform designed to optimize metro
            rail operations and maintenance. Built to support the complex
            demands of modern metro rail networks, midas360 leverages real-time
            data, machine learning, and predictive intelligence to transform how
            rail systems are managed—from infrastructure monitoring to asset
            performance and service reliability.
          </p>
          <p className={`${styles.traincondent} mt-[40px] md:block hidden`}>
            At its core, midas360 integrates data from various sources internal
            systems, IoT sensors, and third-party platforms to deliver
            actionable insights that empower operators to make informed .
          </p>

          {/* Mobile Title */}
          <p className={`${styles.traintitle} block md:hidden`}>
            About midas360{" "}
          </p>

          {/* Mobile Content */}
          <p
            className={`${styles.traincondent} mt-[12px] block md:hidden justify-center text-center pb-12`}
          >
            midas360 (Metrorail Intelligent Decision Analytics System) is an
            advanced AI-powered analytics platform designed to optimize metro
            rail operations and maintenance. Built to support the complex
            demands of modern metro rail networks, midas360 leverages real-time
            data, machine learning, and predictive intelligence to transform how
            rail systems are managed—from infrastructure monitoring to asset
            performance and service reliability.
          </p>
          <p
            className={`${styles.traincondent} mt-[20px] block md:hidden justify-center text-center pb-12`}
          >
            At its core, midas360 integrates data from various sources internal
            systems, IoT sensors, and third-party platforms to deliver
            actionable insights that empower operators to make informed .
          </p>
        </div>
      </div>

      {/* Image on the right */}
      <div className="md:flex hidden justify-end mr-[6.9vw]">
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
