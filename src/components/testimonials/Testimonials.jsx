import React from "react";
import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./testimonials.css";
import IMG1 from "../../assets/santosh.jpeg";
import IMG2 from "../../assets/shiva2.jpg";
import IMG3 from "../../assets/dillep.jpg";
import IMG4 from "../../assets/narendhar.jpg";
import IMG5 from "../../assets/bhanuprasad.jpeg";
import IMG6 from "../../assets/nishanth.jpeg";

const Testimonials = () => {
  const testimonials = [
    {
      id: 5,
      link: "https://www.linkedin.com/in/bhanu-prasad-paitar-583188249/",
      img: IMG5,
      name: "Bhanu Prasad",
      role: "President-ELC CBIT",
      test: "Karthikeya is an exceptional member of our Electoral Literacy Club, showcasing a remarkable blend of hard work, technical expertise, and creative ideas. His dedication, tech skills, and innovative thinking have significantly contributed to our club's success. Karthikeya's commitment, proficiency, and collaborative spirit make him an invaluable asset to our team.Karthikeya/'s relentless pursuit of excellence and his ability to inspire others with his ideas have elevated the impact of our club. We are grateful for his contributions and confident in his potential for future achievements.",
    },
    {
      id: 6,
      link: "https://www.linkedin.com/in/nishanth-artham-1a572b212/",
      img: IMG6,
      name: "Nishanth",
      role: "Technical Team Head- CBIT COSC",
      test: "I highly commend Karthikeya for his exceptional contributions and dedication to our CBIT-COSC Club. His technical expertise, problem-solving skills, and leadership have been invaluable. Karthikeya's passion for technology, continuous learning, and collaborative spirit have greatly enriched our club. He is a respected member who consistently goes above and beyond, inspiring others to excel. I wholeheartedly recommend Karthikeya for any future endeavors.",
    },
    {
      id: 1,
      link: "https://www.linkedin.com/in/sai-santosh-bonagiri-335168225/",
      img: IMG1,
      name: "Sai Santosh",
      role: "",
      test: "Karthikeya is an exceptional web developer with a keen eye for detail and a knack for creating visually appealing and functional websites. His expertise in competitive coding adds a valuable dimension to his skill set, making them a well-rounded professional. Collaborating with Karthikeya was a pleasure, as his strong communication skills and dedication ensured the success of our projects.",
    },
    {
      id: 2,
      link: "https://www.linkedin.com/in/shivashanker-reddy-cheruku-713823278/",
      img: IMG2,
      name: "Shiva Shanker Reddy",
      role: "",
      test: " Karthikeya is a truly exceptional full stack developer. His technical skills and dedication are outstanding, consistently delivering high-quality work. With a keen eye for detail, he ensures clean and efficient code. Karthikeya's proactive approach and excellent communication make him a pleasure to collaborate with. He brings a positive attitude and strong work ethic to every project, making him an invaluable asset.",
    },
    {
      id: 3,
      link: "",
      img: IMG3,
      name: "Dileep Kumar",
      role: "",
      test: " Karthikeya is an exceptional full stack developer with a visionary mindset. His technical expertise, innovative thinking, and collaborative spirit set him apart. With a deep understanding of both front-end and back-end development, he delivers seamless solutions. Karthikeya's commitment to continuous learning ensures he stays ahead of the curve. Working with him guarantees outstanding results and a rewarding experience.",
    },
    {
      id: 4,
      link: "https://www.linkedin.com/in/naren8790/",
      img: IMG4,
      name: "Narendhar Reddy",
      role: "",
      test: " Karthikeya is an exceptional full stack developer with a versatile skill set. His expertise spans both front-end and back-end development, and his attention to detail is impeccable. With a strong work ethic and a passion for problem-solving, Karthikeya consistently delivers outstanding results. He is an invaluable asset to any development team.",
    },
  ];
  return (
    <section id="testmonials">
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
        {testimonials.map((test) => (
          <SwiperSlide className="testimonial" key={test.id}>
            <div className="client__avatar">
              <a
                href={test.link ? test.link : ""}
                target="_blank"
                rel="noreferrer"
              >
                <img src={test.img} alt="" />
              </a>
            </div>
            <h3 className="client__name">{test.name}</h3>
            {test.role && <h4>{test.role}</h4>}

            <em className="client__review">{'"' + test.test + '"'}</em>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
