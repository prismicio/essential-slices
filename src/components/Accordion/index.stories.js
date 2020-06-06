import React from 'react'
import Accordion from '.'
import mock from './mock.json'

export default {
  title: 'components/Accordion',
  component: Accordion,
}

export const Default = () => {
  return <Accordion items={mock.items} />
}
