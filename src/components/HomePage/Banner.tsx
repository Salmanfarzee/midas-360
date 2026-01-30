const Banner = () => {
  return (
    <section
      className="
      h-[302px]
        md:h-screen 
        bg-[url('/assets/midas-home.svg')] 
        md:bg-[url('/assets/home-banner.jpg')] 
        bg-cover bg-center
      "
    >
      <p className="banner-title pt-[11.3vh] md:pt-[33.3vh] pl-[6.5vw]">
        Make smarter decisions,
        <br /> drive efficient metro <br /> operations with{" "}
        <span className="banner-span">midas360</span>
      </p>

      <p className="banner-subtitle pl-[6.5vw] pt-[24px] md:block hidden ">
        An exclusive metro rail management platform for <br /> data-driven
        performance and long-term efficiency.
      </p>
       <p className="banner-subtitle pl-[6.5vw] pt-[24px] md:hidden block">
        An exclusive metro rail management <br/>platform fordata-driven
        performance  <br /> and long-term efficiency.
      </p>
      <div className="md:hidden block howitworks flex mt-8">
        <img src="/assets/home-icon.svg" alt="Arrow Right" className="self-center mr-[5px] ml-[30px]"></img>
        <p>How it works</p>

      </div>

      <div className=" w-[181px] h-[52px] ml-[6.5vw] mt-[12.7vh] rounded-[30px] md:flex hidden flex-row bg-[#209CD8] cursor-pointer">
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