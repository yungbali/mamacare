"use client"
import React from 'react'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

const testimonials = [
  {
    id: 1,
    quote: "The compassionate care I received here was transformative. The therapists deeply understand postpartum challenges and provided me with practical tools to manage anxiety and find joy in motherhood again.",
    author: "Sarah Mitchell",
    role: "First-Time Mother",
    image: "assets/img/testimonial/mother1.png"
  },
  {
    id: 2,
    quote: "When I felt most alone, this community became my lifeline. The 24/7 support and understanding from both professionals and fellow mothers helped me through my darkest moments of postpartum depression.",
    author: "Emily Chen",
    role: "Mother of Two",
    image: "assets/img/testimonial/mother2.png"
  },
  {
    id: 3,
    quote: "Their holistic approach to maternal wellness made all the difference. From therapy to support groups to mindfulness practices - they truly understand what new mothers need to thrive mentally and emotionally.",
    author: "Jessica Thompson",
    role: "New Mother",
    image: "assets/img/testimonial/mother3.png"
  }
]

export default function TestimoniaHomeOne() {
  return (
    <section className="testimonial-section testimonial-style1 section-padding">
      <div className="container">
        <div className="row g-6 align-items-center">
          <div className="col-lg-4 col-md-4">
            <div className="testimonial-thumbv1 w-100 wow fadeInDown" data-wow-delay=".4s">
              <img src="assets/img/testimonial/mother-support.png" alt="Mother receiving support" className="w-100" />
            </div>
          </div>
          <div className="col-lg-8 col-md-8">
            <div className="testimonial-common-wrapper position-relative ps-xxl-5 ps-lg-4">
              <Swiper
                spaceBetween={2}
                loop={true}
                slidesPerView={1}
                speed={1300}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
                navigation={{
                  nextEl: ".cmn-prev2",
                  prevEl: ".cmn-next2",
                }}
                pagination={{
                  el: ".dot-cmn",
                  clickable: true,
                }}
                modules={[Autoplay, Pagination, Navigation]}
                className="swiper testimonial-slidewrap01"
              >
                {testimonials.map((item, index) => (
                  <SwiperSlide key={index} className="swiper-slide">
                    <div className="testimonail-common-items">
                      <div className="ratting d-flex align-items-center justify-content-between">
                        <img src="assets/img/icon/quote-left.svg" alt="quote icon" />
                        <div className="stars">
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                        </div>
                      </div>
                      <p>{item.quote}</p>
                      <div className="review-man">
                        <img src={item.image} alt={item.author} />
                        <div className="cont">
                          <h3>{item.author}</h3>
                          <span>{item.role}</span>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
              <div className="dot-cmn"></div>
            </div>
          </div>
        </div>
      </div>
      <img src="assets/img/element/flower-badge.png" alt="decorative flower" className="flower-testimonial d-sm-block d-none" />
    </section>
  )
}
