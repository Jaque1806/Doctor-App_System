import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';
import { assets } from '../assets/assets 2';

const About = () => {

  /* An array of testimonial objects */
  const testimonials = [
    {
      text: "Booking my doctor's appointment has never been easier! The website is user-friendly, and I was able to find a specialist and schedule a visit within minutes.",
      name: "Sarah M., Dublin",
    },
    {
      text: "As a busy mom, this website is a lifesaver! I can easily book appointments for my whole family without making multiple phone calls.",
      name: "Emily T., Galway",
    },
    {
      text: "I love how simple and fast the booking process is! I found a great doctor near me, scheduled an appointment in seconds. No stress at all!",
      name: "Daniel K., Limerick",
    },
    {
      text: "I was skeptical at first, but this platform is fantastic! It helped me find a specialist I needed without the hassle of calling multiple clinics. 10/10 service!",
      name: "Mariah K., Dublin",
    },
  ];
  
  return (
    /* ABOUT US - SECTION */
    <div className="max-w-4xl mx-auto p-6 ">
      <h2 className="text-3xl font-semibold text-center text-gray-900 mb-10">About Us</h2>
      <div className='flex justify-center items-center'>
        <img className="w-32 sm:w-64 lg:w-70 mb-2 rounded-xl" src={assets.contact_image} alt="" />
        <p className="text-sm text-gray-700 ml-10">
          At VitaCare, we make booking doctor’s appointments easy and convenient. 
          Our platform allows you to quickly find and schedule appointments with trusted healthcare professionals, 
          all from the comfort of your home. With a simple, user-friendly interface, you can choose the best time 
          for your appointment and get the care you need, fast and hassle-free.
          Your health is our priority, and we’re here to make your healthcare journey smoother.
        </p>
      </div>
      
      {/* TESTIMONIAL - SECTION */}
      <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-3xl font-semibold text-center text-gray-900 mb-6 mt-10">Testimonials</h2>
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        className="rounded-2xl"
      >
        {/* map = array method that loops over each testimonial */}
        {testimonials.map((testimonial, index) => (

          /* key{index} = ensures that React can identify each element uniquely */
          <SwiperSlide key={index}>
            <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
              <p className="text-gray-600 italic">"{testimonial.text}"</p>
              <div className="mt-4 flex items-center justify-center">
                <span className="text-yellow-400 text-lg">★★★★★</span>
                <p className="ml-2 text-gray-700 font-semibold">{testimonial.name}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>

    </div>

  )
}

export default About