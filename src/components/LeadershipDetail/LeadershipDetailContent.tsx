import styles from "./LeadershipDetail.module.scss";

const LeadershipDetailContent = () => {
  return (
    <section className=" mt-8 mb-24">
      {/* Content on the left */}
      <div className="mx-[6.9vw]">
        <div className="">
          <p className={`${styles.LeadContent}`}>
            Ms. Hind Bahwan is the Founder and Chairperson of Bahwan CyberTek
            Group which employs over 4000 associates, operates in 50 countries
            and serves 2200+ customers including Fortune 500 companies. Her
            leadership extends to HBTI DMCC, an independent, privately owned
            commodity trading company, where she serves as Chairman, overseeing
            a private commodity trading entity with a global reach in crude oil
            and oil products. In 2024, she was appointed as the Chairman of the
            Family Business Council Gulf (FBCG), a prominent non-profit
            organization dedicated to supporting the continuity and success of
            family businesses across the GCC region.
          </p>
          <p className={`${styles.LeadContent} my-8`}>
            Beyond the corporate frontier, Ms. Bahwan is the visionary behind
            Bahwan Lifestyle, curating innovative luxury products for the
            discerning consumer. Her strategic prowess reflects in her roles on
            the boards of various public and private organizations. She is on
            the Board of the Harvard Business School Middle East and North
            Africa Board (MENAAB) which helps in incorporating a global
            perspective into the School’s work and curriculum. She is a Member
            of the Middle Centre Advisory Board of the London School of
            Economics, a Member of the Middle East Advisory Board of Coutts &
            Co., and a Board Member of the Family Business Network (FBN) for
            GCC.
          </p>
          <p className={`${styles.LeadContent} mb-8`}>
            Ms. Bahwan is a recipient of many honors including the Legion Of
            Honor Award From France’s Ambassador to the Sultanate Of Oman in
            2019, Ernst & Young’s ‘Oman’s Young Entrepreneur of the Year 2000’,
            Arabian Business ‘e-Achiever of the Year’ award from H.H. Sheikh
            Mohammed Bin Rasheed in 2001, ‘IT Women of the Year 2002’ award by
            UNDP, ‘Global Leaders for Tomorrow’ award by the World Economic
            Forum in 2003, ‘Global Young Leader’ by the World Economic Forum in
            2007 and ‘Woman of Power Award’ by Asian Business Leadership Forum
            in 2011. She has also been featured on the 100 Power Businesswomen
            in The Middle East, published by Forbes Middle East over multiple
            years. Notably, under her stewardship, Bahwan CyberTek earned the
            distinction of being featured in three Stanford case studies, a
            testament to her strategic acumen.
          </p>
          <p className={`${styles.LeadContent}`}>
            Ms Bahwan boasts an academic foundation in Computer Science and
            holds distinguished alumni status from the Harvard Business School.
            Additionally, she is a celebrated Kellogg School of Management
            Executive Scholar, specializing in leadership and management.
          </p>
        </div>
      </div>

      {/* Image on the right */}
    </section>
  );
};

export default LeadershipDetailContent;
