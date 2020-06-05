import React from 'react'
import PricingTable from '.'
import mock from './mock.json'

export default {
  title: 'Slices/PricingTable',
  component: PricingTable,
}

export const Default = () => <PricingTable slice={mock} />
