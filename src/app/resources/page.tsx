import Wrapper from '@/layouts/Wrapper'
import { Metadata } from 'next';
import React from 'react'
import dynamic from 'next/dynamic'

const Resources = dynamic(() => import('@/components/resources'), {
  ssr: true
})

export const metadata: Metadata = {
  title: "Resources - MomCare",
  description: "Access helpful resources, guides, and tools designed to support you through your postpartum journey.",
};

export default function ResourcesPage() {
  return (
    <Wrapper>
      <Resources />
    </Wrapper>
  )
} 