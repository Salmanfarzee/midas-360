
import styles from "./Insights.module.scss"
const InsightsBanner = () => {
  return (
    <section
      className="relative md:mt-[110px] mt-[75px] h-[492px] bg-[url('/assets/Insights-Banner.svg')] bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(270.06deg, rgba(27, 27, 27, 0) 54.21%, rgba(0, 0, 0, 0.55) 70.66%), url('/assets/Insights-Banner.svg')`,
      }}

    >
      {/* Overlay text */}
      <p className={` absolute bottom-[15vh] left-[6vw] ${styles.bannerTitle}`}>
        Insights
      </p>
    </section>
  );
};

export default InsightsBanner;