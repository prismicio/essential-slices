import React from 'react'
import VideoHighlights from '.'
import mock from './mock.json'

export default {
  title: 'Slices/VideoHighlights',
  component: VideoHighlights,
}

function linkResolver(doc) {
  return `/link/to/${doc.uid}`
}

export const Simple = () => (
  <VideoHighlights slice={mock} linkResolver={linkResolver} />
)

Simple.story = {
  name: 'Simple Example',
}
