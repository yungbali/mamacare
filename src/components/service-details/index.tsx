import React from 'react'
import Breadcrumnd from '../common/Breadcrumnd'
import FooterTwo from '@/layouts/footers/FooterTwo'
import ServiceDetailsArea from './ServiceDetailsArea'
import SubscribeHomeOne from '../homes/home/SubscribeHomeOne'

export default function ServiceDetails() {
  return (
    <>
      <Breadcrumnd title="Service Details" subtitle="Mental Health Support Services" />
      <ServiceDetailsArea />
      <SubscribeHomeOne />
      <FooterTwo />
    </>
  )
}
