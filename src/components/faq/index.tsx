import React from 'react'
import HeaderThree from '@/layouts/headers/HeaderThree'
import Breadcrumnd from '../common/Breadcrumnd'
import FooterTwo from '@/layouts/footers/FooterTwo'

export default function FAQ() {
  return (
    <>
      <HeaderThree />
      <Breadcrumnd title="FAQ" subtitle="Frequently Asked Questions" />
      <section className="faq-section section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              {/* Add FAQ content here */}
            </div>
          </div>
        </div>
      </section>
      <FooterTwo />
    </>
  )
}
