import React from 'react'
import HeaderThree from '@/layouts/headers/HeaderThree'
import Breadcrumnd from '../common/Breadcrumnd'
import FooterTwo from '@/layouts/footers/FooterTwo'

export default function Resources() {
  return (
    <>
      <HeaderThree />
      <Breadcrumnd title="Resources" subtitle="Resources" />
      <section className="resources-area space-top space-bottom">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-6">
              <div className="resource-card">
                <h3>Educational Materials</h3>
                <ul className="resource-list">
                  <li>
                    <i className="fas fa-file-pdf"></i>
                    Postpartum Recovery Guide
                  </li>
                  <li>
                    <i className="fas fa-file-pdf"></i>
                    Breastfeeding Tips & Techniques
                  </li>
                  <li>
                    <i className="fas fa-file-pdf"></i>
                    Mental Wellness Workbook
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="col-lg-6">
              <div className="resource-card">
                <h3>Helpful Tools</h3>
                <ul className="resource-list">
                  <li>
                    <i className="fas fa-calendar"></i>
                    Recovery Timeline Planner
                  </li>
                  <li>
                    <i className="fas fa-book"></i>
                    Recommended Reading List
                  </li>
                  <li>
                    <i className="fas fa-video"></i>
                    Video Library
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <FooterTwo />
    </>
  )
} 