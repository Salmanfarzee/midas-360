import React from "react";
import styles from "./Insights.module.scss"

interface CardProps {
  title: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ title, description }) => {
  return (
    <div className={`${styles.InsightsCards}  shadow-md rounded-lg p-6 hover:shadow-lg transition`}>
      <h6 className=" mb-2">{title}</h6>
        <p className="">{description}</p>
    </div>
  );
};

const InsightsCards: React.FC = () => {
  const cards = [
    { title: "Card 1", description: "This is the first card description." },
    { title: "Card 2", description: "This is the second card description." },
  
  ];

  return (
    <section className={`py-12 px-[6.9vw] ${styles.InsightsCardsContainer}`}  >
      {/* Title */}
      <h2 className="text-3xl font-bold text-gray-900 mb-8">Section Title</h2>

      {/* Cards Grid */}
      <div className={`grid grid-cols-1 md:grid-cols-2 gap-32 `}>
        {cards.map((card, index) => (
          <Card key={index} title={card.title} description={card.description} />
        ))}
      </div>
    </section>
  );
};

export default InsightsCards;