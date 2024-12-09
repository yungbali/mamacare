import HeaderTwo from '@/layouts/headers/HeaderTwo'
import React from 'react'
import BrandHomeOne from '../home/BrandHomeOne'
import CounterHomeOne from '../home/CounterHomeOne'
import FooterOne from '@/layouts/footers/FooterOne'
import ServiceHomeOne from '../home/ServiceHomeOne'
import TestimoniaHomeOne from '../home/TestimoniaHomeOne'

export default function HomeTwo() {
  return (
    <>
      <HeaderTwo />
      <div className="hero-section section-padding">
        <div className="container">
          <div className="text-center">
            <h1>Mental Health Support</h1>
            <p>Professional care for your postpartum journey</p>
          </div>
        </div>
      </div>
      <ServiceHomeOne />
      <TestimoniaHomeOne />
      <BrandHomeOne style_2={true} />
      <CounterHomeOne style_2={true} />
      <FooterOne />
    </>
  )
}
