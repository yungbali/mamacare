"use client"
import React from 'react'

export default function SubscribeHomeOne() {
  return (
    <div className="subscrbie-section">
      <div className="container">
        <div className="subscribe-wrapper-v01">
          <div className="container">
            <div className="row g-4 justify-content-lg-start justify-content-between align-items-end">
              <div className="col-lg-5 col-md-5">
                <div className="subscribe-thumb">
                  <img src="assets/img/footer/mother-child.png" alt="Mother and child bonding" className="w-100" />
                </div>
              </div>
              <div className="col-lg-1 d-lg-block d-none"></div>
              <div className="col-lg-5 col-md-6">
                <div className="subscribe-content">
                  <h2>Join Our Healing Community</h2>
                  <p>
                    Get weekly support, resources, and expert guidance for your maternal mental health journey. You're not alone.
                  </p>
                  <form onSubmit={(e) => e.preventDefault()} className="subscribe-form">
                    <input type="email" placeholder="Enter Your Email" required />
                    <button type="submit" className="d-center">Join Now</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
