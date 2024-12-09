import React from 'react'
import HeaderThree from '@/layouts/headers/HeaderThree'
import Breadcrumnd from '../common/Breadcrumnd'
import FooterTwo from '@/layouts/footers/FooterTwo'

export default function Community() {
  return (
    <>
      <HeaderThree />
      <Breadcrumnd title="Mother's Community" subtitle="Community" />
      <section className="community-area space-top space-bottom">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <div className="section-title">
                <h2>Join Our Supportive Community</h2>
                <p>Connect with other mothers, share experiences, and build lasting friendships in a safe and understanding environment.</p>
              </div>
            </div>
          </div>
          
          <div className="row g-4 mt-4">
            <div className="col-lg-4">
              <div className="community-card">
                <h4>Support Groups</h4>
                <p>Weekly meetings with other mothers facing similar challenges</p>
                <a href="#" className="main-btn">Join a Group</a>
              </div>
            </div>
            
            <div className="col-lg-4">
              <div className="community-card">
                <h4>Online Forums</h4>
                <p>24/7 access to our online community platform</p>
                <a href="#" className="main-btn">Join Discussion</a>
              </div>
            </div>
            
            <div className="col-lg-4">
              <div className="community-card">
                <h4>Events & Workshops</h4>
                <p>Regular meetups and learning opportunities</p>
                <a href="#" className="main-btn">View Calendar</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <FooterTwo />
    </>
  )
} 