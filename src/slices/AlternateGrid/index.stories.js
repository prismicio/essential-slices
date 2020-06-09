import React from 'react'
import AlternateGrid from '.'
import mock from './mock.json'

export default {
  title: 'Slices/AlternateGrid',
  component: AlternateGrid,
}

function linkResolver(doc) {
  return `/link/to/${doc.uid}`
}

export const Simple = () => (
  <AlternateGrid slice={mock} linkResolver={linkResolver} />
)

Simple.story = {
  name: 'Simple Example',
}
