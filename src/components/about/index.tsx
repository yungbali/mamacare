import React from 'react'
import HeaderThree from '@/layouts/headers/HeaderThree'
import Breadcrumnd from '../common/Breadcrumnd'
import FooterTwo from '@/layouts/footers/FooterTwo'
import AboutHomeOne from '../homes/home/AboutHomeOne'
import TestimoniaHomeOne from '../homes/home/TestimoniaHomeOne'

export default function About() {
  return (
    <>
      <HeaderThree />
      <Breadcrumnd title="About Us" subtitle="About" />
      <AboutHomeOne />
      <TestimoniaHomeOne />
      <FooterTwo />
    </>
  )
}
