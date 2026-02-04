import { useDevice } from "../Context/AppContext";
import styles from "./HowItWorks.module.scss";

const HowItWorksBanner = () => {
  const { isMobile } = useDevice();
  return (
    <section
      className="relative md:mt-[110px] mt-[75px] md:h-[492px] h-[134px] md:bg-[url('/assets/HowItWorksBanner.svg')] bg-[url('/assets/HIW-mob-banner.svg')] bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(
      270.06deg,
      rgba(27, 27, 27, 0) 54.21%,
      rgba(0, 0, 0, 0.55) 70.66%
    ), url(${isMobile ? "/assets/HIW-mob-banner.svg" : "/assets/HowItWorksBanner.svg"})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay text */}
      <p className={` absolute md:bottom-[15vh] bottom-[0px] left-[6vw] ${styles.bannerTitle}`}>
      How it works
      </p>
    </section>
  );
};

export default HowItWorksBanner;
