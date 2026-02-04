import styles from "./InsightsDetail.module.scss";

const InsightsContent = () => {
  return (
    <section className={`${styles.caseDetailcontent}  mb-16 `}>
      {/* Content on the left */}
      <div className="mx-[6.9vw]">
        <div className="">
          <h5>Client </h5>
          <p className={`pb-8`}>
            A leading transport company in the Middle East operating 79 trains
            and 1442 buses on 107 routes, carrying nearly 7 million riders on
            179,000 trips a month by bus service. 
          </p>
        </div>
        <div className="">
          <h5>Challenge  </h5>
          <ul className="list-disc pl-6 pb-8">
            <li>
              Lack of real-time, on-demand KPI reports hampered the ability to
              evaluate asset health and efficiency.
            </li>
            <li>
              Disparate formats of cost and maintenance data adversely impacted
              process standardization and asset management efficiency.
            </li>
            <li>
              A reactive approach to asset management led to frequent corrective
              maintenance, increased downtime, and operational costs.
            </li>
            <li>
              Integration issues between fuel management, vehicle monitoring,
              and asset management led to data discrepancies, hindering analysis
              and decision-making.
            </li>
          </ul>
        </div>{" "}
        <div className="">
          <h5>Solution </h5>
          <p className={`pb-4`}>
            A leading transport company in the Middle East operating 79 trains
            and 1442 buses on 107 routes, carrying nearly 7 million riders on
            179,000 trips a month by bus service. 
          </p>
          <ul className="list-disc pl-6 pb-8">
            <li>
              Tailored smart maintenance strategies using case-based reasoning
              and reliability modeling. 
            </li>
            <li>
              Failure forecasting through Monte Carlo simulation with 78%
              accuracy, helping minimize unplanned maintenance. 
            </li>
            <li>
              Predictive insights that proactively reduced downtime and enhanced
              performance across both trains and buses. 
            </li>
          </ul>
        </div>{" "}
        <div className="">
          <h5>Impact </h5>
          <p className="pb-4">
            <span className="">Streamlined Preventive Maintenance: </span>
            Unified maintenance plans and schedules reduced service visits,
            minimized disruptions, and improved resource utilization.
          </p>

          <p className="pb-4">
            <span className="">Proactive Subsystem-Level Planning: </span>
            Enabled predictive maintenance at the subsystem level, allowing
            better planning for spares and tasks, and enhancing inventory and
            workforce efficiency.
          </p>

          <p className="pb-4">
            <span>Tangible Cost and Availability Gains: </span>
            Achieved annual savings of $1.2 million and improved asset
            availability by 1.2%, while also reducing corrective maintenance
            incidents.
          </p>

          <p className="pb-4">
            <span className="">Improved Preventive Maintenance Ratio: </span>
            Shifted the preventive to non-preventive maintenance work order
            ratio from 45/55 to 70/30, driving more reliable and efficient
            operations.
          </p>
        </div>
      </div>
    </section>
  );
};

export default InsightsContent;
