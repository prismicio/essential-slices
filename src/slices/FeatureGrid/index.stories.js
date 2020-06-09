import React from 'react'
import FeatureGrid from '.'
import mock from './mock.json'

export default {
  title: 'Slices/FeatureGrid',
  component: FeatureGrid,
}

function linkResolver(doc) {
  return `/link/to/${doc.uid}`
}

export const Simple = () => (
  <FeatureGrid slice={mock} linkResolver={linkResolver} />
)

Simple.story = {
  name: 'Simple Example',
}
