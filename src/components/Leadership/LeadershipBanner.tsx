import { useDevice } from "../Context/AppContext";
import styles from "./leadership.module.scss";

const LeadershipBanner = () => {
  const { isMobile } = useDevice();
  return (
    <section
      className="relative md:mt-[110px] mt-[75px] md:h-[492px] h-[134px] md:bg-[url('/assets/LeadersjipBanner.svg')] bg-[url('/assets/about-mob-banner.svg')] bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(
      270.06deg,
      rgba(27, 27, 27, 0) 54.21%,
      rgba(0, 0, 0, 0.55) 70.66%
    ), url(${isMobile ? "/assets/about-mob-banner.svg" : "/assets/LeadersjipBanner.svg"})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay text */}
      <p className={` absolute md:bottom-[15vh] bottom-[0px] left-[6vw] ${styles.bannerTitle}`}>
        About Us
      </p>
    </section>
  );
};

export default LeadershipBanner;
