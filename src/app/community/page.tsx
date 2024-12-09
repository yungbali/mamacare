import Wrapper from '@/layouts/Wrapper'
import { Metadata } from 'next';
import React from 'react'
import dynamic from 'next/dynamic'

const Community = dynamic(() => import('@/components/community'), {
  ssr: true
})

export const metadata: Metadata = {
  title: "Mother's Community - MomCare",
  description: "Join our supportive community of mothers. Share experiences, build connections, and find strength in our network of understanding moms.",
};

export default function CommunityPage() {
  return (
    <Wrapper>
      <Community />
    </Wrapper>
  )
} 