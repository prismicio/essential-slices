import React from 'react'
import TestimonialsSlider from '.'
import mock from './mock.json'

export default {
  title: 'Slices/TestimonialsSlider',
  component: TestimonialsSlider,
}

function linkResolver(doc) {
  return `/link/to/${doc.uid}`
}

export const Simple = () => (
  <TestimonialsSlider slice={mock} linkResolver={linkResolver} />
)

Simple.story = {
  name: 'Simple Example',
}
