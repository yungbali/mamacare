import Wrapper from '@/layouts/Wrapper'
import { Metadata } from 'next';
import React from 'react'
import dynamic from 'next/dynamic'

const MentalHealth = dynamic(() => import('@/components/mental-health'), {
  ssr: true
})

export const metadata: Metadata = {
  title: "Mental Health Support - MomCare",
  description: "Professional counseling and therapy designed to address postpartum challenges. Get the mental health support you need on your motherhood journey.",
};

export default function MentalHealthPage() {
  return (
    <Wrapper>
      <MentalHealth />
    </Wrapper>
  )
} 