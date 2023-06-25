import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import data from '../data/testamonials.json'
import { Autoplay, Pagination } from "swiper";
import 'swiper/css/pagination';
import 'swiper/css/autoplay';


const Testamonial = ({isBg}) => {
    const { testamonial } = data;

    return(
        <section
        id="reviews"
        className={`section-padding testamonial ${isBg === "yes"? "bg-one": ""}`}
        >
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 offset-xl-3 col-lg-10 offset-lg-1">
                        <div className="section-title-center text-center">
                          <span>{testamonial.subtitle}</span>
                          <h2 className="display-6">{testamonial.title}</h2>
                          <div className="section-divider divider-traingle"></div>
                        </div>
                    </div>
                </div>
                <div className="row testi-row">
                    <div className="col-12">
                        <Swiper
                        modules={[Pagination, Autoplay]}
                        pagination={{clickable: true}}
                        autoplay
                        breakpoints={{
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            }, 1024: {
                                slidesPerView: 3,
                                spaceBetween: 20,
                            },
                        }}
                        >
                            {testamonial.testamonialItem?.map((data) => (
                                <SwiperSlide key={data.id}>
                                    <div className="swiper-slide p-5px-lr">
                                        <div className="testi-card card h-100 translateEffect1">
                                            <div className="card-body p-4">
                                                <div className="testi-card__quotation">
                                                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 0 512"></svg>
                                                </div>
                                                <div className="testi-card__user-info__icons">
                                                    <img src={data.icon} alt="icon"/>
                                                </div>
                                                <p className="my-4">{data.description}</p>
                                                <div className="testi-card__user-info pt-4">
                                                    <div className="testimonial__user-info__images">
                                                        <img src={data.images} alt={data.title}/>
                                                    </div>
                                                    <div className="testamonial__user-info__content">
                                                        <h4 className="mb-0">{data.name}</h4>
                                                        <p className="mb-0">{data.title}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Testamonial;