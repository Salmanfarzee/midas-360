import styles from "./Leadership.module.scss";

const OurLeadership = () => {
  return (
    <>
      <p className={`${styles.traintitle} ml-[6.9vw] md:mt-16 `}>Our Leadership</p>
      <section
        className={`md:grid md:grid-cols-[40%_60%] grid-cols-1 mb-12 mt-4 ${styles.ourLeadershipSection}`}
      >
        {/* web design */}
        {/* Content on the left */}
        <div className="ml-[6.9vw]  hidden md:block">
          <div className={`${styles.leaderWrapper} relative`}>
            <img src="/assets/hb-leader-bg.svg" className={styles.leaderBg} />
            <img
              src="/assets/hb-leader.svg"
              className={`${styles.leaderImg} absolute `}
            />
          </div>
          <div className=" flex flex-col items-center mt-6">
            <h5>Hind Bahwan</h5>
            <p>Founder & Chairperson</p>
            <a
              className={`${styles.NEReadmore} mt-[20px] flex items-center`}
              href="./leadershipdetail"
            >
              <img
                src="/assets/arrow-blue.svg"
                alt="Arrow Icon"
                className="w-4 h-4  inline-block mr-2"
              />
              Read more
            </a>
          </div>
        </div>
        <div className="ml-[20px] mr-[6.9vw] mt-[60px] md:block hidden">
          <div className="flex items-center md:items-start flex-col mt-[2.7vh]">
            <img src="/assets/quote.svg" alt="" />
          </div>
          <p className={`mt-6 ${styles.leadQuote}`}>
            We believe innovation has meaning only when it improves how
            organizations operate. Our AI-led technology solutions are designed
            to help businesses run smarter, serve better, and create systems
            people can trust every day.
          </p>
        </div>

        {/* mob design */}

        <div className=" mx-[6.9vw] mt-[20px] md:hidden ">
          <div className="flex items-start  flex-col mt-[2.7vh]">
            <img src="/assets/quote.svg" alt="" className="w-[17px] h-[15px] "/>
          </div>
          <p className={`mt-3 ${styles.leadQuote}`}>
            We believe innovation has meaning only when it improves how
            organizations operate. Our AI-led technology solutions are designed
            to help businesses run smarter, serve better, and create systems
            people can trust every day.
          </p>
        </div>

        <div className="ml-[6.9vw]  md:hidden flex mt-[20px]">
          <div className={`${styles.leaderWrapper}  relative`}>
            <img src="/assets/leader-bg-mobile.svg" className={styles.leaderBg} />
            <img
              src="/assets/hb-leader-mobile.svg"
              className={`${styles.leaderImg} absolute `}
            />
          </div>
          <div className=" flex flex-col ml-[2vh] items-start justify-center">
            <h5>Hind Bahwan</h5>
            <p>Founder & Chairperson</p>
            <a
              className={`${styles.NEReadmore} mt-[8px] flex items-start`}
              href="./leadershipdetail"
            >
              <img
                src="/assets/arrow-blue.svg"
                alt="Arrow Icon"
                className="w-2 h-2  inline-block mr-2"
              />
              Read more
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default OurLeadership;
