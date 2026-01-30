const MetroCorporation = () => {
  return (
    <>
    <section className="h-[675px] md:bg-[url('/assets/metro-corporation.png')] bg-[url('/assets/train-sec2-mobile.svg')] bg-cover bg-center flex flex-col items-center text-white text-center md:block hidden">
      <p className="metro-corporation-title pt-[6.8vh]">
        Why Metro Corporations Need{" "}
        <span className="metro-corporation-span">midas360</span>
      </p>
      <p className="metro-corporation-content mt-[2.1vh]">
        As metro networks expand in scale and complexity, traditional
        maintenance can’t keep pace. Aging infrastructure,
        <br /> high service demands, and the need for cost efficiency call for
        smarter solutions. midas360 meets this challenge
        <br /> with real-time monitoring, predictive analytics, and intelligent
        automation, helping operators detect issues early,
        <br /> optimize performance, and deliver safe, reliable journeys.
      </p>
    </section>
    {/* mobile */}
     <section className="h-[360px] md:bg-[url('/assets/metro-corporation.png')] bg-[url('/assets/train-sec2-mobile.svg')] bg-cover bg-center flex flex-col items-center text-white text-center block md:hidden">
      <p className="metro-corporation-title pt-[3.5vh]">
        Why Metro Corporations Need{" "}
        <span className="metro-corporation-span">midas360</span>
      </p>
      <p className="metro-corporation-content mt-[1.5vh] mx-[24px]">
        As metro networks expand in scale and complexity, traditional<br />
        maintenance can’t keep pace. Aging infrastructure,
         high service<br /> demands, and the need for cost efficiency call for
        smarter solutions.<br /> midas360 meets this challenge
         with real-time monitoring, predictive <br />analytics, and intelligent
        automation, helping operators detect issues<br /> early,
       optimize performance, and deliver safe, reliable journeys.
      </p>
    </section>
    </>
  );
};

export default MetroCorporation;
