const Banner = () => {
  return (
    <section className="h-screen bg-[url('/assets/home-banner.jpg')] bg-cover bg-center">
      <p className="banner-title pt-[33.3vh] pl-[6.5vw]">
        Make smarter decisions,
        <br /> drive efficient metro <br /> operations with {""}
        <span className="banner-span">midas360</span>
      </p>
      <p className="banner-subtitle pl-[6.5vw] pt-[24px]">
        An exclusive metro rail management platform for <br /> data-driven
        performance and long-term efficiency.
      </p>
      <div className="w-[181px] h-[52px] ml-[6.5vw] mt-[12.7vh] rounded-[30px] flex flex-row bg-[#209CD8] cursor-pointer">
        <img
          src="/assets/arrow-right-white.png"
          alt="Arrow Right"
          className="self-center mr-[14px] ml-[30px]"
        />
        <span className="banner-action-span self-center">How it works</span>
      </div>
    </section>
  );
};

export default Banner;
