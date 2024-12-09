import Wrapper from '@/layouts/Wrapper'
import { Metadata } from 'next';
import React from 'react'
import dynamic from 'next/dynamic'

const Facilities = dynamic(() => import('@/components/facilities'), {
  ssr: true
})

export const metadata: Metadata = {
  title: "Recovery Facilities - MomCare",
  description: "Comfortable spaces and expert guidance to help you recover physically and emotionally after childbirth. Experience our specialized postpartum facilities.",
};

export default function FacilitiesPage() {
  return (
    <Wrapper>
      <Facilities />
    </Wrapper>
  )
} 