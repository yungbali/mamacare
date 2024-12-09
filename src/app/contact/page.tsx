import Contact from '@/components/contact'
import Wrapper from '@/layouts/Wrapper'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: "Contact Us - MomCare",
  description: "Get in touch with our mental health professionals and support team. We're here to help you on your motherhood journey.",
}

export default function ContactPage() {
  return (
    <Wrapper>
      <Contact />
    </Wrapper>
  )
}
