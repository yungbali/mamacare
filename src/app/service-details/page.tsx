import ServiceDetails from '@/components/service-details'
import Wrapper from '@/layouts/Wrapper'
import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
  title: 'Mental Health Services - MomCare',
  description: 'Comprehensive mental health support services for new mothers, including counseling, therapy, support groups, and crisis intervention.',
};


export default function index() {
  return (
    <Wrapper>
      <ServiceDetails />
    </Wrapper>
  )
}
