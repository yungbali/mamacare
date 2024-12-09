import Service from '@/components/service'
import Wrapper from '@/layouts/Wrapper'
import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
  title: "MomCare Services - Mental Health Support & Recovery",
  description: "Comprehensive postpartum services including mental health support, recovery facilities, and community building for new mothers.",
};


export default function index() {
  return (
    <Wrapper>
      <Service />
    </Wrapper>
  )
}
