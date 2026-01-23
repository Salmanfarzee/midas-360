const AiIntelligence = () => {
  return (
    <section className="grid md:grid-cols-2 grid-cols-1">
      <div>
        <img
          src="/assets/train.png"
          alt="Metro Rails Icon"
          className="w-[557px] h-[372px] mt-[5.6vh] mb-[5.4vh]"
        />
      </div>
      <div>
        <div className="flex flex-col mt-[9.4vh]">
          <p className="train-title">
            AI Intelligence for <br />
            Smarter Metro Rails
          </p>
          <p className="train-condent mt-[26px]">
            midas360 is an AI-powered platform that transforms metro <br /> rail
            operations with predictive insights. By integrating real-time <br />{" "}
            data and IoT systems, it reduces downtime, extends asset life,{" "}
            <br /> and boosts reliability, enabling safer, more efficient, and{" "}
            <br /> future-ready rail networks.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AiIntelligence;
