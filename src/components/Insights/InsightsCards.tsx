import React from "react";
import styles from "./Insights.module.scss";

interface CardProps {
  title: string;
  img: string;
}

const Card: React.FC<CardProps> = ({ title, img }) => {
  return (
    <div
  className={`${styles.InsightsCards} shadow-md relative rounded-lg  hover:shadow-lg bottom-0 transition`}
>
  <img
    src={img}
    alt="Insights Card"
    className=" h-auto z-10 w-full"
  />

  {/* Wrap title + link in a container anchored to bottom */}
  <div className="absolute bottom-[20px] left-0 right-0 px-6 z-20">
    <h6 className={` ${styles.InsightsCardTitle} mb-4`}>
      {title}
    </h6>

    <a href="" className={`${styles.InsightsCardLink} inline-block`}>
      <img
        src="/assets/arrow-white-insights.svg"
        alt="Arrow"
        className="inline-block mr-2"
      />
      View case study
    </a>
  </div>
</div>
  );
};

const InsightsCards: React.FC = () => {
  const cards = [
    {
      title: "Saving $1.2M in Transport by Enhancing Asset Availability",
      img: "/assets/casestudy-inner1.svg",
    },
    {
      title: "Saving $1.2M in Transport by Enhancing Asset Availability",
      img: "/assets/casestudy-inner1.svg",
    },
  ];

  return (
    <section className={`py-12 mb-24 px-[6.9vw] ${styles.InsightsCardsContainer}`}>
      {/* Title */}
      <h2 className=" mb-8">Case Study</h2>

      {/* Cards Grid */}
      <div className={`grid grid-cols-1 md:grid-cols-2 gap-32 `}>
        {cards.map((card, index) => (
          <Card key={index} title={card.title} img={card.img} />
        ))}
      </div>
    </section>
  );
};

export default InsightsCards;
