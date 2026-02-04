import { useDevice } from "../Context/AppContext";
import styles from "./Insights.module.scss";

const InsightsBanner = () => {
  const { isMobile } = useDevice();
  return (
    <section
      className="relative md:mt-[110px] mt-[75px] md:h-[492px] h-[134px] md:bg-[url('/assets/Insights-Banner.svg')] bg-[url('/assets/insights-mob-banner.svg')] bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(
      270.06deg,
      rgba(27, 27, 27, 0) 54.21%,
      rgba(0, 0, 0, 0.55) 70.66%
    ), url(${isMobile ? "/assets/insights-mob-banner.svg" : "/assets/Insights-Banner.svg"})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay text */}
      <p className={` absolute md:bottom-[15vh] bottom-[0px] left-[6vw] ${styles.bannerTitle}`}>
        Insights
      </p>
    </section>
  );
};

export default InsightsBanner;
