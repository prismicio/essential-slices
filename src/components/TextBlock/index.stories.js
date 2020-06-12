import React from 'react'
import TextBlock from '.'

export default {
  title: 'Components/TextBlock',
  component: TextBlock,
}

const mock = {
  optional_icon: {
    dimensions: {
      width: 2048,
      height: 1536,
    },
    alt: null,
    copyright: null,
    url:
      'https://images.prismic.io/repoz/0b72eb6f-1824-4891-914a-c43fdee5b893_running.png?auto=compress,format',
  },
  title: [
    {
      type: 'heading3',
      text: 'Integrate with the SliceZone',
      spans: [],
    },
  ],
  description: [
    {
      type: 'paragraph',
      text:
        'This component has been matched by the SliceZone. Its model has been fetched from vue-essential-slices.',
      spans: [],
    },
  ],
}

export const Default = () => (
  <TextBlock title={mock.title} description={mock.description} />
)

export const WithIcon = () => (
  <TextBlock
    title={mock.title}
    description={mock.description}
    icon={mock.optional_icon}
  />
)
