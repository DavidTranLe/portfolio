import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      link: 'https://www.linkedin.com/in/ching-cheng/',
      name: 'Ching Cheng',
      test: "Throughout our professional journey together, I have had the pleasure of working closely with David on numerous tasks and projects. David's lighthearted and positive attitude is magnetizing and creates a fun and enjoyable work environment. David's curiosity and relentless drive to tackle new challenges never cease to amaze me. David stands out as one of the most talented and hardworking software engineers I have had the privilege to know personally. His dedication is evident in the quality of his work, and his ability to navigate complex problems with ease sets him apart. Anyone would be lucky to work alongside someone as talented and dependable as David.",
    },
    {
      link: 'https://www.linkedin.com/in/paulnnaoji/',
      name: 'Paul Nnaoji',
      test: "David Le is a problem solver and software engineer who takes on big challenges and accomplishes them. Any team would be lucky to have him.",
    },
  ];
  return (
    <section id="testimonials">
      <h5>Feedback from my peers</h5>
      <h2>Testimonials</h2>
      <Swiper
        className="container testimonials__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
        >
        {testimonials.map((test, index) => (
          <SwiperSlide className="testimonial" key={index}>
          <div className="client__avatar">
            <a href={test.link}>
              <BsLinkedin />
            </a>
          </div>
          <h5 className='client__name'>{test.name}</h5>
          <small className="client__review">{test.test}</small>
        </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

export default Testimonials
