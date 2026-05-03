import React from "react";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { testimonials } from "../../data/portfolio";
import "./testimonials.css";

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Feedback from my peers & Mentors</h5>
      <div id="work">
        <h3>Testimonials</h3>
      </div>

      <Swiper
        className="container testimonials__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {testimonials.map((t) => (
          <SwiperSlide className="testimonial" key={t.id}>
            <div className="client__avatar">
              <a
                href={t.link ? t.link : ""}
                target="_blank"
                rel="noreferrer"
              >
                <img src={t.img} alt={t.name} loading="lazy" />
              </a>
            </div>
            <h3 className="client__name">{t.name}</h3>
            {t.role && <h4>{t.role}</h4>}
            <em className="client__review">{'"' + t.test + '"'}</em>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
