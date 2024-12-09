import React from 'react'

export default function ContactInfo() {
  return (
    <section className="contact-infosectionv1 space-top overflow-hidden space-bottom">
      <div className="container">
        <div className="row g-lg-4 g-3 justify-content-center">
          <div className="col-lg-4 col-md-6 col-sm-6 wow fadeInUp" data-wow-delay=".3s">
            <div className="contact-call-info">
              <div className="icon d-center">
                <i className="fa-solid fa-heart"></i>
              </div>
              <div className="co-box">
                <h5 className="black">Mental Health Support</h5>
                <p className="pra">
                  24/7 Professional counseling and therapy designed for postpartum care
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6 wow fadeInUp" data-wow-delay=".3s">
            <div className="contact-call-info">
              <div className="icon d-center">
                <i className="fa-solid fa-home"></i>
              </div>
              <div className="co-box">
                <h5 className="black">Recovery Facilities</h5>
                <p className="pra">
                  Comfortable spaces equipped for your post-birth recovery journey
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6 wow fadeInUp" data-wow-delay=".3s">
            <div className="contact-call-info">
              <div className="icon d-center">
                <i className="fa-solid fa-users"></i>
              </div>
              <div className="co-box">
                <h5 className="black">Community Support</h5>
                <p className="pra">
                  Connect with other mothers and build lasting relationships
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
