"use client"
import React from 'react'

export default function ServiceDetailsArea() {
  return (
    <section className="service-details-area section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="service-details-content">
              <h2>Maternal Mental Health Support</h2>
              <p>
                We provide comprehensive mental health support services designed specifically for mothers, including:
              </p>
              <ul>
                <li>Individual Therapy Sessions</li>
                <li>Group Support Meetings</li>
                <li>Crisis Intervention</li>
                <li>Postpartum Depression Treatment</li>
                <li>Anxiety Management</li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="service-sidebar">
              <div className="contact-info">
                <h3>Need Help?</h3>
                <p>24/7 Crisis Support Available</p>
                <a href="tel:1800123456" className="cmn-btn">Call Now</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
