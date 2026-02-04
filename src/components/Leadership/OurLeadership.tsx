import styles from "./Leadership.module.scss";

const OurLeadership = () => {
  return (
    <section
      className={`grid md:grid-cols-[40%_60%] grid-cols-1 my-12 ${styles.ourLeadershipSection}`}
    >
      {/* Content on the left */}
      <div className="ml-[6.9vw] ">
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
      <div className="ml-[20px] mr-[6.9vw] mt-[60px]">
        <div className="flex items-center md:items-start flex-col mt-[2.7vh]">
          <img src="/assets/quote.svg" alt="" />
        </div>
        <p className={`mt-6 ${styles.leadQuote}`}>
          We believe innovation has meaning only when it improves how
          organizations operate. Our AI-led technology solutions are designed to
          help businesses run smarter, serve better, and create systems people
          can trust every day.
        </p>
      </div>

      {/* Image on the right */}
    </section>
  );
};

export default OurLeadership;
