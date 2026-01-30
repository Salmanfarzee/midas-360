const SmartBanner = () => {
  return (
    <section className="md:h-[796px] h-[433px] mt-[11px] md:bg-[url('/assets/smart-banner.jpg')] bg-[url('/assets/mobile-midas-smarter.svg')] bg-cover bg-center flex flex-col">
      <p className="smart-banner-title md:mt-[8vh] mt-[3.5vh] md:ml-[7vw] ml-[6vw]">
        Smarter Insights and
        <br /> Smoother Operations with{" "}
        <span className="smart-banner-title-span">midas360</span>
      </p>
      <p className="smart-banner-subtitle md:mt-[4.8vh] mt-[2.5vh] md:ml-[7vw] ml-[6vw]">
        Transforms real-time O&M data into actionable <br /> insights for
        proactive decision-making.
      </p>
      <ul className="smart-banner-content mt-[11px] md:ml-[7.5vw] ml-[6.5vw] list-disc list-inside space-y-1">
        <li>Integrates AI, GenAI, data science, and predictive analytics</li>
        <li>Improves asset availability and performance</li>
        <li>Enhances reliability with predictive intelligence</li>
      </ul>

      <p className="smart-banner-subtitle md:mt-[4.8vh] mt-[2.5vh] md:ml-[7vw] ml-[6vw]">
        Delivers cost efficiency and better passenger <br /> experiences with
        intelligent automation.
      </p>
      <ul className="smart-banner-content mt-[11px] md:ml-[7.5vw] ml-[6.5vw] list-disc list-inside space-y-1">
        <li>Optimized resources</li>
        <li>Consistent service performance</li>
        <li>Lower costs with predictive maintenance</li>
        <li>Minimal downtime & disruptions</li>
        <li>Scalable for the future</li>
      </ul>
    </section>
  );
};

export default SmartBanner;
