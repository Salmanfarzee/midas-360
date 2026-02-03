const AiIntelligence = () => {
  return (
    <section className="grid md:grid-cols-2 grid-cols-1">
      <div className="md:block hidden">
        <img
          src="/assets/train.png"
          alt="Metro Rails Icon"
          className="w-[557px] h-[372px] mt-[5.6vh] mb-[5.4vh]"
        />
      </div>
      <div>
        <div className="flex items-center md:items-start flex-col md:mt-16 mt-[2.7vh]">
          <p className="train-title md:block hidden">
            AI Intelligence for <br />
            Smarter Metro Rails
          </p>

          <p className="train-condent mt-[26px] md:block hidden">
            midas360 is an AI-powered platform that transforms metro <br /> rail
            operations with predictive insights. By integrating real-time <br />{" "}
            data and IoT systems, it reduces downtime, extends asset life,{" "}
            <br /> and boosts reliability, enabling safer, more efficient, and{" "}
            <br /> future-ready rail networks.
          </p>
          {/* mobile */}
          <p className="train-title block md:hidden ">
            AI Intelligence for Smarter Metro Rails
          </p>
          <p className="train-condent mt-[12px] block md:hidden justify-center text-center pb-12">
            midas360 is an AI-powered platform that transforms metro rail
            operations
            <br /> with predictive insights. By integrating real-time data and
            IoT systems, it
            <br /> reduces downtime, extends asset life, and boosts reliability,
            enabling safer,
            <br /> more efficient, and future-ready rail networks.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AiIntelligence;
