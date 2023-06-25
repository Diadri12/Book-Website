import React from "react";
import data from "../data/fun-facts.json";
import CountUp from "react-countup";

const Funfacts = ({isBg}) => {
    const {funfacts} = data;
    return(
        <section
        id="chapters"
        className={`section-padding counters ${isBg === "yes" ? "bg-one": ""}`}
        >
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 offset-xl-3 col-lg-10 offset-lg-1">
                        <div className="section-title-center text-center">
                            <span>{funfacts.subtitle}</span>
                            <h2 className="display-6">{funfacts.title}</h2>
                            <div className="section-divider divider-traingle"></div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <ul className="counters__stats m-0 p-0 d-flex flex-wrap align-items-center">
                            {funfacts.funFactsItems.map((data, i) => (
                                <li
                                key={i}
                                data-aos='fade-up'
                                data-aos-duration='1000'
                                data-aos-delay={(i + 2) * 50}
                                >
                                    <div className="counters__stats-box h-100 translateEffect1">
                                        <div className="counters__stats-icon">
                                            <img
                                            className="img-fluid"
                                            src={data.icon}
                                            alt="icon"
                                            width='100'
                                            height='100'
                                            />
                                        </div>
                                        <div className="counters__stats-box__number">
                                            <CountUp end={data.countNumer} enableScrollSpy="true"/>
                                        </div>
                                        <h5>{data.title}</h5>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Funfacts;