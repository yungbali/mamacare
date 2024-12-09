import React from 'react'
import HeroHomeOne from './HeroHomeOne'
import AboutHomeOne from './AboutHomeOne'
import HeaderOne from '@/layouts/headers/HeaderOne'
import ServiceHomeOne from './ServiceHomeOne'
import TestimoniaHomeOne from './TestimoniaHomeOne'
import BrandHomeOne from './BrandHomeOne'
import SubscribeHomeOne from './SubscribeHomeOne'
import FooterOne from '@/layouts/footers/FooterOne'

export default function HomeOne() {
  return (
    <>
      <HeaderOne />
      <HeroHomeOne />
      <AboutHomeOne />
      <ServiceHomeOne />
      <TestimoniaHomeOne />
      <BrandHomeOne />
      <SubscribeHomeOne />
      <FooterOne />
    </>
  )
}
