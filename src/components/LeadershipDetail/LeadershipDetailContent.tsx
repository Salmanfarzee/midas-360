import styles from "./LeadershipDetail.module.scss";

const LeadershipDetailContent = () => {
  return (
    <section className=" mt-8 mb-24">
      {/* Content on the left */}
      <div className="ml-[6.9vw]">
        <div className="">
          <p className={`${styles.LeadContent}`}>
            Durgaprasad (DP) is the Co-founder, Director, and Group CEO of
            Bahwan CyberTek Group, where he strategically directs operations and
            business development, overseeing global digital transformation
            engagements. As an Executive Entrepreneur, DP's vision led to the
            creation of nine subsidiaries and three Joint Ventures, generating
            over $1.25 billion in revenues over the past decade. Notable
            initiatives include a pioneering 4th Party Logistics (4PL)
            organization in the Middle East with DHL for Petroleum Development
            Oman. Under DP's leadership, Bahwan CyberTek emerged as a key player
            in Big Data, Analytics, Mobility, Cloud, and UXM solutions, serving
            diverse industries in 20 countries.
          </p>
          <p className={`${styles.LeadContent} my-8`}>
            DP's commitment to international quality standards led Bahwan
            CyberTek to early CMMi Level 5, Version 1.3 certification. The group
            received numerous awards, including Oracle's Business Excellence
            Award, Red Herring's Top 100 Technology Companies in APAC, and
            recognition from Stanford Graduate School of Business. DP,
            consistently ranked among Oman's top business leaders and
            influential CEOs, received the Lifetime Achievement Award in
            Technology 2020 and was recognized as "One of the Most Powerful
            CEOs" by the Oman Economic Review.
          </p>
          <p className={`${styles.LeadContent} `}>
            He holds an engineering degree from Anna University, Chennai, and
            completed management development programs at Kellogg and XLRI.
          </p>
        </div>
      </div>

      {/* Image on the right */}
    </section>
  );
};

export default LeadershipDetailContent;
