import React from 'react'
import HeaderThree from '@/layouts/headers/HeaderThree'
import Breadcrumnd from '../common/Breadcrumnd'
import FooterTwo from '@/layouts/footers/FooterTwo'

export default function Resources() {
  return (
    <>
      <HeaderThree />
      <Breadcrumnd title="Resources" subtitle="Mental Health Resources" />
      <section className="resources-section section-padding">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-4">
              <div className="resource-card">
                <h3>Self-Care Guides</h3>
                <p>Practical tips and exercises for maintaining mental wellness</p>
                <a href="#" className="resource-link">Download PDF</a>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="resource-card">
                <h3>Support Groups</h3>
                <p>Find local and online support groups for mothers</p>
                <a href="#" className="resource-link">Find Groups</a>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="resource-card">
                <h3>Crisis Help</h3>
                <p>24/7 emergency support contacts and helplines</p>
                <a href="#" className="resource-link">View Contacts</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <FooterTwo />
    </>
  )
} 