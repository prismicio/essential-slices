import React from 'react'
import CustomerLogos from '.'
import mock from './mock.json'

export default {
  title: 'Slices/CustomerLogos',
  component: CustomerLogos,
}

export const Default = () => <CustomerLogos slice={mock} />
