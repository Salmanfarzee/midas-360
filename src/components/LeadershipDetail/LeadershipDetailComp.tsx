import styles from "./LeadershipDetail.module.scss";

const LeadershipDetailComp = () => {
  return (
    <section className="grid md:grid-cols-[60%_40%] grid-cols-1 mt-40 mb-16">
      {/* Content on the left */}
      <div className="ml-[6.9vw] flex items-end">
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

      {/* Image on the right */}
      <div className="relative flex justify-center mr-[6.9vw] w-[355px]">
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
    </section>
  );
};

export default LeadershipDetailComp;
