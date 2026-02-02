import styles from "./NewsAndEvents.module.scss";

const NewsAndEventsCard = () => {
  const cards = [
    {
      title: "Driving the Future of Mobility at InnoMetro 2025",
      desc: "Mike Muralidharan, Board Director at BCT, delivered a compelling address on the role of AI, IoT, and data analytics in transforming mobility and enabling smarter, safer, and more sustainable urban cities.",
      link: "",
      webImg: {
        url1: "/assets/NE-web1-img1.svg",
        url2: "/assets/NE-web1-img2.svg",
        url3: "/assets/NE-web1-img3.svg",
      },
      mobileImg: {
        url1: "/assets/NE-mobile1-img1.svg",
        url2: "/assets/NE-mobile1-img2.svg",
        url3: "/assets/NE-mobile1-img3.svg",
      },
    },
    {
      title: "midas360 from BCT launched at InnoMetro 2024!",
      desc: "We're excited to announce that midas360 - Metrorail Intelligent Decision Analytics System, an exclusive product developed by BCT.",
      link: "",
      webImg: {
        url1: "/assets/NE-web2-img1.svg",
        url2: "/assets/NE-web2-img2.svg",
        url3: "/assets/NE-web2-img3.svg",
      },
      mobileImg: {
        url1: "/assets/NE-mobile2-img1.svg",
        url2: "/assets/NE-mobile2-img2.svg",
        url3: "/assets/NE-mobile2-img3.svg",
      },
    },
  ];
  return (
    <div>
      {cards.map((card, index) => (
        <>
          <section className="grid md:grid-cols-[50%_50%] grid-cols-1 mt-28 mb-20">
            {/* Content on the left */}
            <div className="ml-[6.9vw] mr-[25px]">
              <div className="flex items-center md:items-start flex-col mt-[2.7vh]">
                {/* Desktop Title */}
                <p className={`${styles.NEtitle} `}>{card.title}</p>

                <p className={`${styles.NEcontent} mt-[20px] `}>
                  {card.desc}
                  transforming mobility and enabling smarter, safer, and more
                  sustainable urban cities.
                </p>
                <a
                  className={`${styles.NEReadmore} mt-[40px] flex items-center`}
                  href={card.link}
                >
                  <img
                    src="/assets/arrow-blue.svg"
                    alt="Arrow Icon"
                    className="w-4 h-4  inline-block mr-2"
                  />

                  Read more
                </a>
              </div>
            </div>

            {/* Image on the right */}
            <div className="md:flex hidden justify-center mr-[6.9vw] relative">
              <div className="relative">
                {/* Background */}
                <div className="absolute top-[-30px] left-[0px] right-[0px] h-[455px] bg-[#209CD880] opacity-20"></div>

                {/* Image grid */}
                <div className="grid grid-cols-2 gap-4 relative z-10 margin-dynamic-NE ">
                  {/* First column: single image */}
                  <div className="flex">
                    <img
                      src={card.webImg.url1}
                      alt="News and Events Image 1"
                      className="max-w-[316px] w-full h-auto object-cover  flex-shrink-0"
                    />
                  </div>

                  {/* Second column: stacked images */}
                  <div className="flex flex-col space-y-4">
                    <img
                      src={card.webImg.url2}
                      alt="News and Events Image 2"
                      className="max-w-[231px] w-full h-auto object-cover"
                    />
                    <img
                      src={card.webImg.url3}
                      alt="News and Events Image 3"
                      className="max-w-[231px] w-full h-auto object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
        <hr className={`h-[2px] w-[30vw] bg-[#209CD8] justify-self-center ${index === cards.length - 1 ? 'hidden' : ''}`} />
        </>
      ))}
    </div>
  );
};

export default NewsAndEventsCard;
