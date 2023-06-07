import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './testimonials.css';
import IMG1 from '../../assets/santosh.jpeg';
import IMG2 from '../../assets/shiva.jpg'

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      link: 'https://www.linkedin.com/in/sai-santosh-bonagiri-335168225/',
      img : IMG1,
      name: 'Sai Santosh',
      role: '',
      test: 'Karthikeya is an exceptional web developer with a keen eye for detail and a knack for creating visually appealing and functional websites. His expertise in competitive coding adds a valuable dimension to his skill set, making them a well-rounded professional. Collaborating with Karthikeya was a pleasure, as his strong communication skills and dedication ensured the success of our projects.',
    },
    {
      id: 2,
      link: 'https://www.linkedin.com/in/shivashanker-reddy-cheruku-713823278/',
      img : IMG2,
      name: 'Shiva Shanker Reddy',
      role: '',
      test: " Karthikeya is a truly exceptional full stack developer. His technical skills and dedication are outstanding, consistently delivering high-quality work. With a keen eye for detail, he ensures clean and efficient code. Karthikeya's proactive approach and excellent communication make him a pleasure to collaborate with. He brings a positive attitude and strong work ethic to every project, making him an invaluable asset.",
    },
    {
      id: 3,
      link: '',
      img : IMG2,
      name: 'Dileep Kumar',
      role: '',
      test: " Karthikeya is an exceptional full stack developer with a visionary mindset. His technical expertise, innovative thinking, and collaborative spirit set him apart. With a deep understanding of both front-end and back-end development, he delivers seamless solutions. Karthikeya's commitment to continuous learning ensures he stays ahead of the curve. Working with him guarantees outstanding results and a rewarding experience.",
    },
    
  ];
  return (
    <section id="testmonials">
      <h5>Feedback from my peers</h5>
      <h2>Testimonials</h2>
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
            <a  href={test.link?test.link:''} target='_blank'><img src={test.img} alt="" /></a>
            
          </div>
          <h3 className='client__name'>{test.name}</h3>
          {test.role && <h5>{test.role}</h5>}
          
          <em className="client__review">{'"'+test.test + '"'}</em>
        </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

export default Testimonials