import React from 'react'
import HeaderThree from '@/layouts/headers/HeaderThree'
import Breadcrumnd from '../common/Breadcrumnd'
import FooterTwo from '@/layouts/footers/FooterTwo'

export default function Facilities() {
  return (
    <>
      <HeaderThree />
      <Breadcrumnd title="Recovery Facilities" subtitle="Recovery Facilities" />
      <section className="facilities-area space-top space-bottom">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-6">
              <div className="facility-card">
                <div className="facility-content">
                  <h3>Comfortable Recovery Spaces</h3>
                  <p>Private rooms designed for your comfort and recovery, equipped with everything you need for postpartum healing.</p>
                  <ul className="facility-features">
                    <li>Private bathrooms with therapeutic tubs</li>
                    <li>Comfortable beds and seating for nursing</li>
                    <li>Peaceful environment for rest</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="col-lg-6">
              <div className="facility-card">
                <div className="facility-content">
                  <h3>Professional Care Services</h3>
                  <p>Expert care available around the clock to support your recovery journey.</p>
                  <ul className="facility-features">
                    <li>Lactation consulting</li>
                    <li>Physical therapy sessions</li>
                    <li>Nutritional guidance</li>
                  </ul>
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