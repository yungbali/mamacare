import Link from 'next/link'
import React from 'react'

export default function AboutHomeOne() {
  return (
    <>
      <section className="about-section style-v01 section-padding white-bg">
        <div className="container">
          <div className="row g-4 align-items-center justify-content-center">
            <div className="col-lg-6 col-md-6">
              <div className="about-contentv1">
                <div className="section-title mb-40">
                  <h5 className="p1-clr wow fadeInLeft" data-wow-delay="0.4s">
                    Welcome Mothers
                  </h5>
                  <h2 className="wow fadeInDown" data-wow-delay=".3s">
                    Your Well-Being Comes First
                  </h2>
                  <p className="wow fadeInUp" data-wow-delay=".4s">
                    Our dedicated team understands the unique challenges of motherhood. We provide comprehensive 
                    support through therapeutic programs, specialized facilities, and a nurturing community to help 
                    you navigate this beautiful journey with confidence and peace of mind.
                  </p>
                  <div className="progress_bar d-grid gap-xxl-4 gap-4">
                    <div className="progress_bar_item">
                      <div className="per-title d-flex align-items-center justify-content-between">
                        <div className="item_label p900-clr">Mental Health Support</div>
                      </div>
                      <div className="item_bar">
                        <div className="progress" data-progress="95" style={{ width: "95%" }}></div>
                      </div>
                    </div>
                    <div className="progress_bar_item">
                      <div className="per-title d-flex align-items-center justify-content-between">
                        <div className="item_label p900-clr">Mother Satisfaction</div>
                      </div>
                      <div className="item_bar">
                        <div className="progress" data-progress="98" style={{ width: "98%" }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
