import React from 'react'
import CardsCarousel from '.'
import mock from './mock.json'

export default {
  title: 'Slices/CardsCarousel',
  component: CardsCarousel,
}
export const Default = () => <CardsCarousel slice={mock} />
