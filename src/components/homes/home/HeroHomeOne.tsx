import Link from 'next/link'
import React from 'react'

export default function HeroHomeOne() {
  return (
    <>
      <section className="banner-section style-v1 overflow-hidden">
        <div className="container">
          <div className="row g-4 align-items-center position-relative">
            <div className="col-lg-7 col-md-7 col-sm-9">
              <div className="hero-contentv01">
                <h1 className="wow fadeInUp" data-wow-delay="0.4s">
                  Empowering Mothers
                  <span className="harves">
                    one step at a time
                  </span>
                </h1>
                <p className="wow fadeInUp" data-wow-delay="0.6s">
                  Your journey through motherhood deserves care, support, and understanding. <br />
                  Compassionate mental health support tailored for your post-birth recovery.
                </p>
                <ul className="hero-list wow fadeInUp" data-wow-delay="0.8s">
                  <li>
                    <i className="fa-solid fa-angles-right"></i>
                    Professional Mental Health Support
                  </li>
                  <li>
                    <i className="fa-solid fa-angles-right"></i>
                    Dedicated Recovery Facilities
                  </li>
                  <li>
                    <i className="fa-solid fa-angles-right"></i>
                    Supportive Mother's Community
                  </li>
                </ul>
                <Link href="/about" className="cmn-btn round100 wow fadeInUp" data-wow-delay="0.9s">
                  Book Your Free Consultation
                  <i className="fa-solid fa-arrow-right"></i>
                </Link>
              </div>
            </div>
            <div className="col-lg-5 col-md-5 col-sm-8">
              <div className="hero-thumbv01 position-relative wow fadeInDown" data-wow-delay="0.5s">
                <img src="assets/img/banner/hero1.png" alt="img" className="mimg" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
