import Faq from '@/components/faq'
import Wrapper from '@/layouts/Wrapper'
import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
  title: 'Frequently Asked Questions - MomCare',
  description: 'Common questions about maternal mental health, our support services, facilities, and how we can help you through your postpartum journey.',
};

export default function index() {
  return (
    <Wrapper>
      <Faq />
    </Wrapper>
  )
}
