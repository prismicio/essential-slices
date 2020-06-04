import React from 'react'
import CallToAction from '.'
import mock from './mock.json'

export default {
  title: 'Slices/CallToAction',
  component: CallToAction,
}

function linkResolver(doc) {
  return `/link/to/${doc.uid}`
}

export const Simple = () => (
  <CallToAction slice={mock} linkResolver={linkResolver} />
)

Simple.story = {
  name: 'Simple Example',
}
