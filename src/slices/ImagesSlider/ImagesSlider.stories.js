import React from 'react'
import ImagesSlider from '.'
import mock from './mock.json'

export default {
  title: 'Slices/ImagesSlider',
  component: ImagesSlider,
}
export const Default = () => <ImagesSlider slice={mock} />
