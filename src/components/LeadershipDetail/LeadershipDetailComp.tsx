import styles from "./LeadershipDetail.module.scss";

const LeadershipDetailComp = () => {
  return (
    <section className="grid md:grid-cols-[60%_40%] grid-cols-1 md:mt-40 mt-20 md:mb-16 mb-4">
      {/* Content on the left -web */}
      <div className="ml-[6.9vw] md:flex hidden items-end">
        <div className="flex items-center md:items-start flex-col mt-[2.7vh]">
          {/*  Title */}
          <h2 className={`${styles.LeadTitle} md:block hidden mb-4`}>
            Hind Bahwan
          </h2>
          <p className={`${styles.LeadDesignation} md:block hidden`}>
            Founder & Chairperson
          </p>
        </div>
      </div>

      {/* web Image on the right */}
      <div className="relative md:flex hidden justify-center mr-[6.9vw]  w-[355px]">
        {/* Background image */}
        <img
          src="/assets/detailImageBg.svg"
          alt="Background"
          className="w-auto h-auto"
        />

        {/* Foreground image */}
        <img
          src="/assets/HB-leadership.svg"
          alt="Foreground"
          className="absolute top-15 left-[19px] top-[17px] h-[335px] object-contain"
        />
      </div>

      <div className="relative flex justify-end mt-[2.7vh]  mx-[6.9vw] md:hidden">
        {/* mob Image on the right */}
        <div className=" absolute bottom-[10px] left-0 block md:hidden">
          {/* mob content */}
          <h2 className={`${styles.LeadTitle} mb-2`}>
            Hind Bahwan
          </h2>
          <p className={`${styles.LeadDesignation} `}>
            Founder & Chairperson
          </p>
        </div>

        {/* Background image */}
        <img
          src="/assets/bg-hb-detail.svg"
          alt="Background"
          className="w-auto h-auto"
        />

        {/* Foreground image */}
        <img
          src="/assets/hb-round-mobile-detail.svg"
          alt="Foreground"
          className="absolute  right-[0px] top-[5px] h-[112px] object-contain"
        />
      </div>
    </section>
  );
};

export default LeadershipDetailComp;
