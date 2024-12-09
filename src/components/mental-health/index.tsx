import React from 'react'
import HeaderThree from '@/layouts/headers/HeaderThree'
import Breadcrumnd from '../common/Breadcrumnd'
import FooterTwo from '@/layouts/footers/FooterTwo'

export default function MentalHealth() {
  return (
    <>
      <HeaderThree />
      <Breadcrumnd title="Mental Health Support" subtitle="Mental Health Support" />
      <section className="service-details space-top space-bottom">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="service-details-content">
                <h2>Professional Mental Health Support for New Mothers</h2>
                <p>Our specialized counseling and therapy services are designed to address the unique challenges of postpartum life. We understand that becoming a mother is a transformative experience that can bring both joy and overwhelming emotions.</p>
                
                <div className="service-feature-list mt-4 mb-4">
                  <h3>Our Support Services Include:</h3>
                  <ul>
                    <li>
                      <i className="fas fa-check"></i>
                      Individual Counseling Sessions
                    </li>
                    <li>
                      <i className="fas fa-check"></i>
                      Postpartum Depression Support
                    </li>
                    <li>
                      <i className="fas fa-check"></i>
                      Anxiety Management Techniques
                    </li>
                    <li>
                      <i className="fas fa-check"></i>
                      24/7 Crisis Support Hotline
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="col-lg-4">
              <div className="sidebar-widget">
                <div className="widget-call">
                  <h3>Need Immediate Support?</h3>
                  <p>Our counselors are available 24/7</p>
                  <a href="tel:1234567890" className="main-btn">
                    Call Now
                    <i className="fa-solid fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <FooterTwo />
    </>
  )
} 