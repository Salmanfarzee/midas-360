
import styles from "./Leadership.module.scss"
const LeadershipBanner = () => {
  return (
    <section
      className="relative md:mt-[110px] mt-[75px] h-[492px] bg-[url('/assets/LeadersjipBanner.svg')] bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(270.06deg, rgba(27, 27, 27, 0) 54.21%, rgba(0, 0, 0, 0.55) 70.66%), url('/assets/LeadersjipBanner.svg')`,
      }}

    >
      {/* Overlay text */}
      <p className={` absolute bottom-[15vh] left-[6vw] ${styles.bannerTitle}`}>
        Leadership
      </p>
    </section>
  );
};

export default LeadershipBanner;