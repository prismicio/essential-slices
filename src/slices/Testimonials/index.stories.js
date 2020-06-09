import React from 'react'
import Testimonials from '.'
import mock from './mock.json'

export default {
  title: 'Slices/Testimonials',
  component: Testimonials,
}

function linkResolver(doc) {
  return `/link/to/${doc.uid}`
}

export const Simple = () => (
  <Testimonials slice={mock} linkResolver={linkResolver} />
)

Simple.story = {
  name: 'Simple Example',
}
