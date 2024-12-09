import About from '@/components/about'
import Wrapper from '@/layouts/Wrapper'
import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
  title: 'About MomCare - Postpartum Support & Recovery',
  description: 'Learn about our mission to support mothers through their postpartum journey with compassionate care and professional support services.',
};


export default function index() {
  return (
    <Wrapper>
      <About />
    </Wrapper>
  )
}
