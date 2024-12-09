import React from 'react'
import { Metadata } from 'next';
import HomeOne from '@/components/homes/home';
import Wrapper from '@/layouts/Wrapper';

export const metadata: Metadata = {
  title: 'MomCare - Maternal Mental Health Support',
  description: 'Professional postpartum mental health support, recovery facilities, and a nurturing community for new mothers. Get the care you deserve on your motherhood journey.',
};

export default function index() {
  return (
    <Wrapper>
      <HomeOne />
    </Wrapper>
  )
}
