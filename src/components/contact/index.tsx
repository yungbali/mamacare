import React from 'react'
import HeaderThree from '@/layouts/headers/HeaderThree'
import Breadcrumnd from '../common/Breadcrumnd'
import FooterTwo from '@/layouts/footers/FooterTwo'
import ContactInfo from './ContactInfo'

export default function Contact() {
  return (
    <>
      <HeaderThree />
      <Breadcrumnd title="Contact Us" subtitle="Contact" />
      <section className="contact-section section-padding">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-6">
              <div className="contact-form">
                <h3>Get In Touch</h3>
                <form onSubmit={(e) => e.preventDefault()}>
                  <div className="row g-4">
                    <div className="col-md-6">
                      <input type="text" placeholder="Your Name" />
                    </div>
                    <div className="col-md-6">
                      <input type="email" placeholder="Email Address" />
                    </div>
                    <div className="col-12">
                      <textarea rows={4} placeholder="Your Message"></textarea>
                    </div>
                    <div className="col-12">
                      <button type="submit" className="cmn-btn">Send Message</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-lg-6">
              <ContactInfo />
            </div>
          </div>
        </div>
      </section>
      <FooterTwo />
    </>
  )
}
