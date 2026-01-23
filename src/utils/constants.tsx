import { benifitsItemProp, caseStudyItemProp } from "../utils/common.dto";

export const caseStudies: caseStudyItemProp[] = [
  {
    title: "Saving $1.2M in Transport <br /> by Enhancing Asset Availability",
    content:
      "How BCT transformed the operations of 79 trains and <br /> 1442 buses on 107 routes, carrying nearly 7 million riders on 179,000 trips.",
    bgImage: "/assets/case-study-dummy.png",
    actionText: "View case study",
    actionUrl: "/case-study/transport-efficiency",
  },
  {
    title: "Reducing Downtime with Predictive Maintenance",
    content:
      "Discover how Midas360 helped reduce breakdowns by 40% across metro fleets using AI-powered diagnostics.",
    bgImage: "/assets/case-study-dummy.png",
    actionText: "Explore insights",
    actionUrl: "/case-study/predictive-maintenance",
  },
  {
    title: "Optimizing Passenger Flow with Smart Scheduling",
    content:
      "Learn how real-time analytics improved rider experience and reduced wait times by 25%.",
    bgImage: "/assets/case-study-dummy.png",
    actionText: "Read full story",
    actionUrl: "/case-study/passenger-flow",
  },
];

export const BenifitsData: benifitsItemProp[] = [
  {
    title: "Optimized Maintenance",
    description:
      "Predicts failures in infrastructure and rolling stock, enabling proactive off-peak repairs to reduce downtime and costs.",
    marginTop: "5.6",
  },
  {
    title: "Cost Savings",
    description:
      "Identifies inefficiencies in operations and energy use, helping operators cut costs and improve performance.",
    marginTop: "5.6",
  },
  {
    title: "Asset Performance",
    description:
      "Forecasts asset lifespan to plan investments, maximize utilization, and improve long-term management.",
    marginTop: "5.6",
  },
  {
    title: "Improved Reliability and Availability",
    description:
      "Proactive monitoring boosts availability and ensures smooth, uninterrupted operations.",
    marginTop: "4.1",
  },
  {
    title: "Enhanced Operational Efficiency",
    description:
      "Aligns maintenance with train schedules, streamlining workflows and improving team coordination.",
    marginTop: "4.1",
  },
  {
    title: "Sustainability",
    description:
      "Optimizes asset usage to lower energy consumption, reduce emissions, and minimize waste.",
    marginTop: "5.6",
  },
  {
    title: "Predictive Maintenance",
    description:
      "Uses real-time data and analytics to detect issues early, extend asset life, and ensure safety.",
    marginTop: "5.6",
  },
];

export const marginMap = {
  "4.1": "mt-[4.1vh]",
  "5.6": "mt-[5.6vh]",
};
